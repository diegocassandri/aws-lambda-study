const im = require('imagemagick');
const fs = require('fs');
const os = require('os');
const uuidv4 = require('uuid/v4');
const {promisify} = require('util');
const AWS = require('aws-sdk');

const resizeAsync = promisify(im.resize);
const readFileAsync = promisify(fs.readFile);
const unLinkAsync = promisify(fs.unlink);

AWS.config.update({region: 'us-east-1'});
const s3 = new AWS.S3();

exports.handler = async (event,context) => {
    let filesProcessed = event.Records.map( async (record) => {
        let bucket = record.s3.bucket.name;
        let filename = record.s3.object.key;

        //Get file from S3
        var params = {
            Bucket: bucket,
            Key: filename
        };

        let inputdata = await s3.getObject(params).promise();

        //Resize de image
        let tempFile = os.tmpdir() + '/' + uuidv4() + '.jpg';
        let resizeArgs = {
            srcData: inputdata.Body,
            dstPath: tempFile,
            width: 150
        };
        await resizeAsync(resizeArgs);

        //Read the resixed file
        let resizeData = await readFileAsync(tempFile);

        //Upload the new file to s3
        let targetFileName = filename.substring(0,filename.lastIndexOf('.')) + '-small.jpg';
        var params = {
            Bucket: bucket + '-dest',
            Key: targetFileName,
            Body: new Buffer(resizeData),
            ContentType: 'image/jpeg'
        };

        await s3.putObject(params).promise();
        return await unLinkAsync(tempFile);
    });

    await Promise.all(filesProcessed);
    console.log("done");
    return "done";

};
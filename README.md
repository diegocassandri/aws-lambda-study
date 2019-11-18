AWS Lambda Study

- Repoitório destinado a estudos de serverless computing com AWs Lambda e Nodejs

*Informações gerais*

Copiando arquivos para o S3 via CLI

aws s3 cp resize-images.zip s3://cassandri-images/resize-images.zip

upload de codigo da função via AWS CLI
aws lambda update-function-code --function-name resizeImages --s3-bucket cassandri-images --s3-key resize-images.zip --publish
{
    "FunctionName": "resizeImages",
    "FunctionArn": "arn:aws:lambda:us-east-1:102218856995:function:resizeImages:1",
    "Runtime": "nodejs8.10",
    "Role": "arn:aws:iam::102218856995:role/service-role/lambda_s3_execution",
    "Handler": "index.handler",
    "CodeSize": 808,
    "Description": "",
    "Timeout": 15,
    "MemorySize": 128,
    "LastModified": "2019-11-18T02:21:34.734+0000",
    "CodeSha256": "GXyfVh4bb+HpF127fFlR7WkebisAZ4HCDrFAJSDn9Ao=",
    "Version": "1",
    "VpcConfig": {
        "SubnetIds": [],
        "SecurityGroupIds": [],
        "VpcId": ""
    },
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "c00fc2af-3310-4a06-a137-68205826587c"
}


'use strict';
const cep = require ('cep-promise');

module.exports.findOneCep =  async event => {
  
  let cepString = event.pathParameters.cep;
  let statusCode;
  let body;
  
  
  try {
      const response = await cep(cepString);
   
      this.statusCode = 200;
      this.body = response;
      
  } catch (err) {
      this.statusCode = 400;
      this.body = err;
  }
  

  return {
    statusCode :  this.statusCode,
    body : JSON.stringify(this.body)
  }
  
};
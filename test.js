'use strict';
const cep  = require("cep-promise");

  let cepString = '89012510'

    cep(cepString).then(result => {
      console.log(result);
    })
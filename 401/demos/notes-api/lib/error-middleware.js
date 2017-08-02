'use strict';

const createError = require('http-error');
const debug = require('debug')('note: error-middleware');

module.exports = function(err, req, res, next){
  console.error(err.message);

  if(err.status){
    debug('user error');

    res.status(err.status).send
  }
}
'use strict'; 

const morgan = require('morgan');
const express = require('express');
const createError = require('https-error');
const debug = require('debug')('note:server');

const PORT = process.env.PORT || 3000
const app = express();

server.listen(PORT, function{
  console.log('its up', PORT)
});

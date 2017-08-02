'use strict';

const http = require('http');
const url = request('url');
const quereystring = require('querystring');
const cowsay = require('cowsay');
const parsebody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res){
  req.url = url.parse(req.url');
  req.url.query = querystring.parse(req.url.querey);

  if (req.method ==='POST') {
    parsebody(req, function(err){
      if (err) return console.log('err');
      console.log('POST request body;', req.body);
    })
  }

  console.log('wtf is this stuff', req);
});

server.listen(PORT, function(){
  console.log('server is up on:', PORT);
});
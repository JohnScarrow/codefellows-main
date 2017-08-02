'use strict'; 
const parseUrl = require('./parse-url.js');
const parseJSON = require('./parse-json.js');

const Router = module . exports = function () {

  this.router = {
    GET:{},
    POST:{},
    PUT:{},
    DELETE:{}
  }
}

Router.prototype.get = function(endpoint, callback){
  this.router.GET[endpoint] = callback
};

Router.prototype.post = function(endpoint, callback){
  this.router.POST[endpoint] = callback;
};

Router.prototype.put = function(endpoint, callback){
  this.router.PUT[endpoint] = callback;
};

Router.prototype.delete = function(endpoint, callback){
  this.router.DELETE[endpoint] = callback;
};

Router.prototype.route = function(){
  return (req, res) => {
    Promise.all([
      parseUrl(req),
      parseJSON(req)
    ])
    .then(() => {
      if (typeof this.routes[req.method][req.url.pathname] === 'function'){
        this.route[req.method][req.url.pathname](req, res);
        return;
      }
      console.error('route not here dude');

      res.writeHead(404, {
        'Content-Type': 'type/plain'
      });
      res.write('route cant be here... where is it');
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.writeHead(400, {
        'Content-Type': 'text/plain'
      });
      res.write('bad request dude mcdudeson');
      res.end();
    });
  }
}
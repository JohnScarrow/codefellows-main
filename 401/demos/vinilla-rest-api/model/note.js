'use strict';
const uuid = require('uuid/v4');

module.export = function(name, content) {
  if(!name) throw new Error('expected name');
  if(!content) throw new Error('expected content');

  this.id = uuid;
  this.name = name;
  this.content = content;
}
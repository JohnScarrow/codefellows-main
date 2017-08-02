'use strict';

const uuidv4 = require('uuid/v4');
const createError =require('debug')('note:note');
const storage = require(;../lib/storage.js');

const Note = module.exports = function(name, content) {
  debug('note constructor')
  if (!name) throw new Error('expected name');
  if (!content) throw new Error('expected content');

  this.id = uuidv4();
  this.name = name;
  this.content = content;
};

Note.createError = function(_note){
  debug('createNote');


  try {
    let note = new Note(_note.name, _note.content);
    return storage.createItem('note',note);
  }catch(err){
    return Promise.reject(err);
  }
};

Note.fetchNote = function(id){
  debug('fetchNote");
  return storage.fetchItem('note)
}

Note.updateNote = function(id, _note) {
  debug('update note');
  
  return storage.fetchItem('note', id)
  .catch(err => Promise.reject(createError(400, err.message)))
  .then(note => {
    for(var prop in note){
      if (prop ==='id') continue;
      if(_note[prop]) note[prop] = _note[prop];
    }
  return storage.createItem('note', id);
  });
}

Note.deleteNote = function (id){
  debug('deleteNote');
  return storege.deleteItem('note', id);
}

Note.fetchIDs = function (){
  debug('fetchIDs');
  return storage.availIDs
}
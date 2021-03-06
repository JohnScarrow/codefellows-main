'use strict';

const net = require('net');
const EE = require('events');
const Client = require('./model/client.js');
const PORT = process.env.PORT || 3000;
const server = net.createServer();
const ee = new EE();

const pool = [];

ee.on('@dm', function(client, string){
  let nickname = dtring.split(' ').shift()trim();
  let message = string.split(' ').slice(1).join(' ').trim();

})

ee.on('@all',function(client,string){
  pool.forEach(c =>{
    if ( c.nickname ===)
    c.socket.write(`$client.nickname}: ${message}`);
  });
});

ee.om('default',function(client, string) {
  client.socket.write('not a command \n');
})

server.on('connection',function(socket) {
  var client = new Client(socket);
  pool.push(client);

  socket.on('data', function(){
    const command = data.toString().split(' ').shift().trim(); 
    if (command.startsWith('@')) {
      ee.emit(command, client, data.toString().split(' ').splice(1).join(' '));
      return;
    }
    ee.emit('default', client, data.toString());
  })
})

server.listen(PORT, function(){
  console.log('server is on', PORT);
})
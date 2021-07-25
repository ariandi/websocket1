const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: "*"
  }
});

let testName = 'Ariandi';

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.username, event: 'left'});
  });

  socket.on('set-name', (name) => {
    socket.username = name;
    console.log(name)
    io.emit('users-changed', {user: name, event: 'joined'});
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});

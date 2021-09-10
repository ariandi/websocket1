const express = require('express');
const app = express();
const http = require('http');
const { Sequelize } = require('sequelize');
// const BalanceDetails = require('./models/balance_details');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: "*"
  }
});

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('ari_ppobdb', 'ari_ppobuser', 'fiora123', {
//   host: '157.230.43.139',
//   dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

const sequelize = new Sequelize('ppobdbdev', 'ppobuserdev', 'fiora0119', {
  host: '36.95.58.237',
  dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

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

  socket.on('setTrxStatus', (data) => {
    console.log(data)
    io.emit('trxChanged', {data: data, event: 'changed'});
  });
});

server.listen(3005, async () => {
  console.log('listening on *:3005');
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

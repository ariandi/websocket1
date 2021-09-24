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
require('dotenv').config();

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
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

server.listen(process.env.PORT, async () => {
  console.log('listening on *:' + process.env.PORT);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

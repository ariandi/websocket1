const io = require("socket.io-client");
const socket = io("http://localhost:3001");

const express = require('express');
const app = express();
const cron = require('node-cron');

let selamatDateng = 'Hello world';

cron.schedule('*/10 * * * * *', function() {
  console.log('running a task every minute');
}, {});

app.get('/', (req, res) => {
  // socket.emit('set-name', 'Fiorenzi');
  socket.on('users-changed', (data) => {
    console.log(data);
    selamatDateng = data;
  });
  socket.emit('set-name', 'Fiorenzi');
  // socket.fromEvent('users-changed').subscribe(data => {
  //   // let user = data['user'];
  //   this.user.name = data['user'];
  //   console.log('users-changed', data);
  // });
  res.send(selamatDateng);
});

app.listen(3000, () => {
  console.log('V Latest');
  console.log('Listen on 3000');
})

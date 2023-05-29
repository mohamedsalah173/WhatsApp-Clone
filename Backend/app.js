/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http');

app.use(cors());

const server = http.createServer(app);

const { Server } = require('socket.io');
const connection = require('./models/db');

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3001',
  },
});

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('message', (data) => {
    console.log(data);
    socket.broadcast.emit('newMessage', data);
  });
});

connection();

server.listen(PORT, () => {
  console.log(`listen on ${PORT}...`);
});

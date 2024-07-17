require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { socketController } = require('./sockets/controller');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors());

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

io.on('connection', socketController);

server.listen(PORT, () => {
    console.log(`Servidor escuchando el puerto ${PORT}`);
})
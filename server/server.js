const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

const {Server} = require('socket.io');
const { send } = require('process');
const io = new Server(server);

app.use(express.static(__dirname + './../client/'))

app.get('/', (req,res) => {
    res.sendFile(__dirname + 'index.html');
})

io.on("connection", (socket) => {
    console.log('a User connected');
    socket.on('message', (text) => {
        io.emit('message', text); 
    })
});

   
 

server.listen(8000, () => {
    console.log('listening in port 5000');
});

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = process.env.PORT || 4001;

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected')
  
io.on('connection', function(socket){
  socket.emit('chat message', 'an user connected');
  socket.on('chat message', function(msg){
      socket.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
      console.log('chat message', 'user disconnected');
  });
});
  // socket.on('message', ()=>{
    
  // })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
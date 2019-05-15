var express = require('express');
var app = express();
var server = require('http').createServer(app);

var io = require('socket.io')(server);
const path = require('path');
var port = process.env.PORT || 3232;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false,limit: '50mb'}));

app.use(express.static(path.join(__dirname, 'build')));

const games = {};

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + 'public/index.html'));
});

const ex = (fct) => {
  return (...args) => {
    try {
      return fct(...args);
    } catch(e) {
      console.error("exception", e);
    }
  }
};

io.on('connection', ex(socket=>{
  console.log('User connected')
  socket.on('create game', socket => {
    
    
  
    socket.on('message', ()=>{
      
    })
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}))

// This is what the socket.io syntax is like, we will work this later


server.listen(port, () => console.log(`Listening on port ${port}`))
// import
var express = require('express');
var app = new express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const Game = require(__dirname + '/server/game.js');
const game = new Game(io);
const path = require('path');
const port = process.env.PORT || 3232;
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false,limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'build')));

// route

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + 'public/index.html'));
});


// socket.io 
io.on('connection', socket => {
  socket.on('watcher', () => {
    game.addWatcher(socket)
  })

  .on('askState', cookie =>{
    if(game.session == cookie.session){
      const player = game.findPlayerById(cookie.id)
      if(player){
        player.newSocket(socket)
      }else{
        socket.emmit('setCookie', '')
      }
    }else{
      socket.emmit('setCookie', '')
    }
  })

  .on('newPlayer', name => {
    if (!game.started){
      game.addPlayer(name, socket)
    }else{
      socket.emmit('Déja démaré')
    }
  })

  // socket.on('message', ()=>{
    
  // })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
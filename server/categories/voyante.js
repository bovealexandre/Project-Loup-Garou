const Player = require('./players.js');

class Voyante extends Player{
  constructor(config, game){
    super(config, game);
    this.game.voyante = this;
  }

  night(){
    this.voyante_selection = "";
    const list = [];
    for(var player of this.game.players){
      if(player.id != this.id){
        list.push(player.name);
      }
    }
    this.list = list;
    this.socket.emit('voyante_night', {
      list: this.list,
      selection: this.voyante_selection
    });

    this.state = [
      'voyante_night', {
        list: this.list,
        selection: this.voyante_selection
      }
    ]
  }

  voyante_vote(vote){
    if(this.voyante_selection == vote){
      this.voyante_selection = "";
    }
    else{
      this.voyante_selection = vote;
    }

    this.socket.emit('voyante_night', {
      list: this.list,
      selection: this.voyante_selection
    });

    this.state = [
      'voyante_night', {
        list: this.list,
        selection: this.voyante_selection
      }
    ]
  }

  reveal(role){
    const msg = 'Vous avez découvert que ' +
    this.voyante_selection +  ' est ' + role +' en passant la nuit avec ';
    this.socket.emit('special', msg);
  }

  die(str){
    super.die(str);
    delete this.game.voyante;
  }

  attachListeners(){
    super.attachListeners();
    this.socket.on('voyante_selection', vote => this.voyante_vote(vote));
  }

  getRole(){
    return 'voyantemane';
  }
}

module.exports = Voyante;

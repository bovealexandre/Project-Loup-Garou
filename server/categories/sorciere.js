const Player = require('./players.js');

class Sorciere extends Player{
  constructor(config, game){
    super(config, game);
    this.game.sorciere = this;
  }

  night(){
    this.bg_selection = "";
    const list = [];
    for(var player of this.game.players){
      if(player.id != this.id){
        list.push(player.name);
      }
    }
    this.list = list;
    this.socket.emit('bg_night', {
      list: this.list,
      selection: this.bg_selection
    });

    this.state = [
      'bg_night', {
        list: this.list,
        selection: this.bg_selection
      }
    ]
  }

  sorciere_vote(vote){
    if(this.bg_selection == vote){
      this.bg_selection = "";
    }
    else{
      this.bg_selection = vote;
    }

    this.socket.emit('bg_night', {
      list: this.list,
      selection: this.bg_selection
    });

    this.state = [
      'bg_night', {
        list: this.list,
        selection: this.bg_selection
      }
    ]
  }

  die(str){
    super.die(str);
    delete this.game.sorciere;
  }

  attachListeners(){
    super.attachListeners();
    this.socket.on('bg_selection', vote => this.sorciere_vote(vote));
  }

  getRole(){
    return 'sorciere';
  }
}

module.exports = Sorciere;
/* eslint-disable no-useless-constructor */
/* eslint-disable eqeqeq */
const Player = require('./players.js');

class Chasseur extends Player{
  constructor(config, game){
    super(config, game);
  }

  die(str){
    const list = [];
    this.die_str = str;
    for(var player of this.game.players){
      if(player.id != this.id){
        list.push(player.name);
      }
    }
    this.victime = "";
    this.list = list;
    this.game.chasseurDie(this);
    this.socket.emit("chasseur_die", {
      list: this.list,
      victime: this.victime
    });

    this.state = [
      "chasseur_die", {
        list: this.list,
        victime: this.victime
      }
    ];
    
    this.socket.on('chasseur_select', vote => {
      if(this.victime == vote){
        this.victime = "";
      }
      else{
        this.victime = vote;
      }

      this.socket.emit("chasseur_die", {
        list: this.list,
        victime: this.victime
      });
    })
  }

  finally_die(){
    super.die(this.die_str);
  }

  getRole(){
    return 'chasseur';
  }
}

module.exports = Chasseur;

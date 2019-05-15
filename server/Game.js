const uuidv4 = require('uuid/v4');

module.exports = class Game {
  constructor(){
    this.id=uuidv4();
    this.players=[]
  }
}
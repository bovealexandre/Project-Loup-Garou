/* eslint-disable eqeqeq */
const Player = require('./players.js');

class LoupGarou extends Player{
  constructor(config, game){
    super(config, game);
    this.team = 'Loups Garous';
  }

  night(){
    this.LoupGarou_vote = undefined;
    this.socket.emit('loup_garou_vote', this.game._votes);
    this.state = ['loup_garou_vote', this.game.loupGarou_votes];
  }

  loup_garou_vote(vote){
    // eslint-disable-next-line eqeqeq
    if(this.state[0] == 'loup_garou_vote'){
      if (this.LoupGarou_vote) {
        const index = this.game.loupGarou_votes[this.LoupGarou_vote].votes.indexOf(this.name);
        this.game.loupGarou_votes[this.LoupGarou_vote].votes.splice(index, 1);
        if (this.LoupGarou_vote == vote) {
          this.LoupGarou_vote = undefined;
          this.game.loup_garou_vote();
          return;
        }
      }
      this.game.loupGarou_votes[vote].votes.push(this.name);
      this.LoupGarou_vote = vote;
      this.game.loup_garou_vote();
    }
  }


  attachListeners(){
    super.attachListeners();

    this.socket.on('loup_garou_vote', vote => {
      this.loup_garou_vote(vote);
    });
  }


  getRole(){
    return 'Loups Garous';
  }
}

module.exports = LoupGarou;

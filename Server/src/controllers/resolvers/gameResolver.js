const { Game } = require("../../models");

module.exports = {
  newGame: game => {
    return new Promise((resolve, reject) => {
      const { player_one, player_two } = game;
      const newGame = Game({
        player_one,
        player_two
      });
      newGame.save((err, game) => {
        err ? reject(new Error(false)) : resolve(game);
      });
    });
  },
  newRound: (gameid, round) => {
    return Game.findByIdAndUpdate(
      gameid,
      {
        $push: { rounds: round }
      },
      { new: true }
    )
      .exec()
      .then(game => {
        return game;
      })
      .catch(err => {
        return false;
      });
  },
  newWinner: (gameid, winner) => {
    return Game.findByIdAndUpdate(
      gameid,
      { $set: { winner: winner } },
      { new: true }
    )
      .exec()
      .then(game => {
        return game;
      })
      .catch(err => {
        return false;
      });
  }
};

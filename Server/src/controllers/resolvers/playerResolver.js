const { Player } = require("../../models");

module.exports = {
  newPlayer: player => {
    return new Promise((resolve, reject) => {
      const { name } = player;
      const newPlayer = Player({
        name
      });
      newPlayer.save((err, player) => {
        err ? reject(new Error(false)) : resolve(player);
      });
    });
  },
  getPlayers: () => {
    return Player.findOne({ is_active: true })
      .exec()
      .then(player => {
        return player;
      })
      .catch(err => {
        return false;
      });
  },
  getPlayer: playerid => {
    return Player.findById(playerid)
      .exec()
      .then(player => {
        return player;
      })
      .catch(err => {
        return false;
      });
  },
  lostLife: playerid => {
    return Player.findByIdAndUpdate(
      playerid,
      {
        $inc: { life: -1 }
      },
      { new: true }
    )
      .exec()
      .then(player => {
        return player;
      })
      .catch(err => {
        return false;
      });
  },
  winsGame: playerid => {
    return Player.findByIdAndUpdate(
      playerid,
      {
        $inc: { games_win: 1 }
      },
      { new: true }
    )
      .exec()
      .then(player => {
        return player;
      })
      .catch(err => {
        return false;
      });
  },
  lostGame: playerid => {
    return Player.findByIdAndUpdate(
      playerid,
      {
        $inc: { games_win: 1 }
      },
      { new: true }
    )
      .exec()
      .then(player => {
        return player;
      })
      .catch(err => {
        return false;
      });
  },
  update: (playerid, player) => {
    return Player.findByIdAndUpdate(
      playerid,
      {
        $set: player
      },
      { new: true }
    )
      .exec()
      .then(player => {
        return player;
      })
      .catch(err => {
        return false;
      });
  },
  deletePlayer: playerid => {
    return Player.findByIdAndUpdate(
      playerid,
      {
        $set: { is_active: false }
      },
      { new: true }
    )
      .exec()
      .then(player => {
        return player;
      })
      .catch(err => {
        return false;
      });
  }
};

const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    player_one: {
      type: mongoose.Schema.ObjectId,
      ref: "Player",
      require: true
    },
    player_two: {
      type: mongoose.Schema.ObjectId,
      ref: "Player",
      require: true
    },
    rounds: {
      type: [{
          round_num: {
            type: Number,
            require: true
          },
          weapon_player_one: {
            type: String,
            require: true
          },
          weapon_player_two: {
            type: String,
            require: true
          },
          winner: {
            type: mongoose.Schema.ObjectId,
            ref: "Player",
          }
        }]
    },
    winner: {
      type: mongoose.Schema.ObjectId,
      ref: "Player"
    }
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

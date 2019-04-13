const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    players: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Player",
        require: true
      }
    ],
    rounds: {
      type: [
        {
          round_num: {
            type: Number,
            default: 1
          },
          player_one: {
            type: [
              {
                weapon: {
                  type: String,
                  require: true
                },
                player: {
                  type: mongoose.Schema.ObjectId,
                  ref: "Player",
                  require: true
                }
              }
            ]
          },
          player_two: {
            type: [
              {
                weapon: {
                  type: String,
                  require: true
                },
                player: {
                  type: mongoose.Schema.ObjectId,
                  ref: "Player",
                  require: true
                }
              }
            ]
          },
          winner: {
            type: mongoose.Schema.ObjectId,
            ref: "Player",
            require: true
          }
        }
      ]
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

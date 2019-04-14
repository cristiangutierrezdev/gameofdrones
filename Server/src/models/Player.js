const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Player one"
    },
    life: {
      type: Number,
      default: 3
    },
    games_win: {
      type: Number
    },
    games_lost: {
      type: Number
    },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;

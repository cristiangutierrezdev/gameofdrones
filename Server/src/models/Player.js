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
    win: {
      type: Number
    },
    lost: {
      type: Number
    }
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;

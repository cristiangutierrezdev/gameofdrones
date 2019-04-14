const { newGame, newRound, newWinner } = require("./resolvers/gameResolver");

module.exports = {
  createGame: async (req, res) => {
    const game = await newGame(req.body);
    game
      ? res.status(201).send(game)
      : res.status(400).send({ message: "Has been occurred an Error" });
  },
  addRound: async (req, res) => {
    const game = newRound(req.params, req.body);
    game
      ? res.status(200).send(game)
      : res.status(400).send({ message: "Has been occurred an Error" });
  },
  addWinner: async (req, res) => {
    const game = newWinner(req.params, req.body);
    game
      ? res.status(200).send(game)
      : res.status(400).send({ message: "Has been occurred an Error" });
  }
};

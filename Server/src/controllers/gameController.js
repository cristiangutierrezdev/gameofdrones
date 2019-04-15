const { newGame, newRound, newWinner, getGame } = require("./resolvers/gameResolver");

module.exports = {
  createGame: async (req, res) => {
    const game = await newGame(req.body);
    game
      ? res.status(201).send(game)
      : res.status(400).send({ message: "Has been occurred an Error" });
  },
  addRound: async (req, res) => {
    const game = await newRound(req.params.gameid, req.body);
    game
      ? res.status(200).send(game)
      : res.status(400).send({ message: "Has been occurred an Error" });
  },
  addWinner: async (req, res) => {
    const game = await newWinner(req.params.gameid, req.body.winner);
    game
      ? res.status(200).send(game)
      : res.status(400).send({ message: "Has been occurred an Error" });
  },
  getTheGame: async(req, res) => {
    const game = await getGame(req.params.gameid)
    game
      ? res.status(200).send(game)
      : res.status(404).send({message: "Game not found"})
  }
};

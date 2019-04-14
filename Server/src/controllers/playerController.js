const {
  newPlayer,
  getPlayers,
  getPlayer,
  lostLife,
  winsGame,
  lostGame,
  update,
  deletePlayer
} = require('./resolvers/playerResolver');

module.exports = {
  createPlayer: async (req, res) => {
    const player = await newPlayer(req.body);
    player
      ? res.status(201).send(player)
      : res.status(400).send({ message: "Has been occurred an Error" });
  },
  getAllPlayers: async (req, res) => {
    const players = await getPlayers();
    players
      ? res.status(302).send(players)
      : res.status(404).send({ message: "Players not found" });
  },
  getOnePlayer: async (req, res) => {
    const player = await getPlayer(req.params.playerid);
    player
      ? res.status(302).send(player)
      : res.status(404).send({ message: "Player not found" });
  },
  playerLostsLife: async (req, res) => {
    const player = await lostLife(req.params.playerid);
    player
      ? res.status(200).send(player)
      : res.status(304).send({ message: "Has been occurred an Error" });
  },
  playerWinsGame: async (req, res) => {
    const player = await winsGame(req.params.playerid);
    player
      ? res.status(200).send(player)
      : res.status(304).send({ message: "Has been occurred an Error" });
  },
  playerLostsGame: async (req, res) => {
    const player = await lostGame(req.params.playerid);
    player
      ? res.status(200).send(player)
      : res.status(304).send({ message: "Has been occurred an Error" });
  },
  updatePlayer: async (req, res) => {
    const player = await update(req.params.playerid, req.body);
    player
      ? res.status(200).send(player)
      : res.status(304).send({ message: "Has been occurred an Error" });
  },
  deleteOnePlayer: async (req, res) => {
    const player = await deletePlayer(req.params.playerid);
    player
      ? res
          .status(200)
          .send({
            message: `The player ${req.params.playerid} has been removed`
          })
      : res.status(304).send({ message: "Has been occurred an Error" });
  }
};

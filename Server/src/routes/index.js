const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");
const gameController = require("../controllers/gameController");
const {
  createPlayerValidator,
  createGameValidator
} = require("../midlewares/validations");

router.get("/", (req, res) => {
  res.send({ message: "Server on" });
});

/////    PLAYER CRUD -----  PLAYER CUD  ///////
/////    PLAYER CRUD -----  PLAYER CUD  ///////
/////    PLAYER CRUD -----  PLAYER CUD  ///////

router.post(
  "/create/player",
  [createPlayerValidator],
  playerController.createPlayer
);
router.get("/get/players", playerController.getAllPlayers);
router.get("/get/player/:playerid", playerController.getOnePlayer);
router.patch("/lostlife/player/:playerid", playerController.playerLostsLife);
router.patch("/lostsgame/player/:playerid", playerController.playerLostsGame);
router.patch("/winsgame/player/:playerid", playerController.playerWinsGame);
router.put("/update/player/:playerid", playerController.updatePlayer);
router.delete("/delete/player/:playerid", playerController.deleteOnePlayer);

/////    GAME CRUD -----  GAME CUD  ///////
/////    GAME CRUD -----  GAME CUD  ///////
/////    GAME CRUD -----  GAME CUD  ///////

router.post("/create/game", [createGameValidator], gameController.createGame);
router.post("/addround/game/:gameid", gameController.addRound);
router.put("/addwinner/game/:gameid", gameController.addWinner);

module.exports = router;

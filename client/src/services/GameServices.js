import axios from "axios";
const BASE_URL = `https://immense-peak-89821.herokuapp.com/api/v1`;

export const createPlayers = players => {
  let playerOne = { name: players.player_one };
  let playerTwo = { name: players.player_two };
  let playersArray = [];
  return axios
    .post(`${BASE_URL}/create/player`, playerOne)
    .then(player => {
      playersArray.push(player.data);
      return axios.post(`${BASE_URL}/create/player`, playerTwo);
    })
    .then(player => {
      playersArray.push(player.data);
      return playersArray;
    })
    .catch(err => {
      return false;
    });
};

export const getPlayer = playersid => {
  let players = [];
  return axios
    .get(`${BASE_URL}/get/player/${playersid[0].playerid}`)
    .then(player => {
      players.push(player.data);
      return axios.get(`${BASE_URL}/get/player/${playersid[1].playerid}`);
    })
    .then(player => {
      players.push(player.data);
      return players;
    })
    .catch(err => {
      return false;
    });
};

export const createGame = players => {
  return axios
    .post(`${BASE_URL}/create/game`, players)
    .then(game => {
      return game.data;
    })
    .catch(err => {
      return false;
    });
};

export const createRound = (gameid, round) => {
  return axios
    .post(`${BASE_URL}/addround/game/${gameid}`, round)
    .then(game => {
      return game;
    })
    .catch(err => {
      return false;
    });
};
export const winsGame = playerid => {
  return axios
    .patch(`${BASE_URL}/winsgame/player/${playerid}`)
    .then(player => {
      return player;
    })
    .catch(err => {
      return false;
    });
};
export const lostsGame = playerid => {
  return axios
    .patch(`${BASE_URL}/lostsgame/player/${playerid}`)
    .then(player => {
      return player;
    })
    .catch(err => {
      return false;
    });
};
export const lostslife = playerid => {
  return axios
    .patch(`${BASE_URL}/lostlife/player/${playerid}`)
    .then(player => {
      return player;
    })
    .catch(err => {
      return false;
    });
};
export const addWinner = (gameid, winnerid) => {
  const winner = {
    winner: winnerid
  };
  return axios
    .put(`${BASE_URL}/addwinner/game/${gameid}`, winner)
    .then(game => {
      return game;
    })
    .catch(err => {
      return false;
    });
};

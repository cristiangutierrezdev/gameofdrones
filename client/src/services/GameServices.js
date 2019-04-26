import axios from "axios";
const BASE_URL = `https://immense-peak-89821.herokuapp.com/api/v1`;

export const createPlayer = player => {
  return axios
    .post(`${BASE_URL}/create/player`, player)
    .then(player => {
      return player.data;
    })
    .catch(err => {
      return false;
    });
};
export const createGame = game => {
  return axios
    .post(`${BASE_URL}/create/game`, game)
    .then(game => {
      return game.data;
    })
    .catch(err => {
      return false;
    });
};

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

// export const createRound = (player,weapon) =>{
//   return axios.post(`${BASE_URL}/addround/game/`, player)
// }
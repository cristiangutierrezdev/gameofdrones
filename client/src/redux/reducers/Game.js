import { type as createGame } from "../actions/createGame";
import { type as incRound } from "../actions/incRound";
import { type as addWinner } from "../actions/addWinner";

const defaultState = [];
let id = 0
const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case createGame: {
      id++
      return [
        ...state, 
        { id,
          players: payload.players,
          roundsNumb: 1,
          rounds: []
        }];
    }
    case incRound :{
      const game = state.find(n => n.id === payload.gameId);
      game.rounds.push(payload.round)
      const newRoundsNumb = game.roundsNumb + 1;
      game.roundsNumb = newRoundsNumb
      return [...state];
    }
    case addWinner: {
      const game = state.find(n => n.id === payload);
      game.winner = payload;
      return [...state];
    }
    default:
      return state;
  }
};

export default reducer
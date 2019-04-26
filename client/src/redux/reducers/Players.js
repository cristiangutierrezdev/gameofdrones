import { type as createPlayer } from "../actions/createPlayer";
import { type as addWeapon } from "../actions/addWeapon";
import { type as lostLife } from "../actions/lostLife";

const defaultState = [];
let id = 0;
const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case createPlayer: {
      id++;
      return [
        ...state, 
        { id,
          player: payload,
          life: 3 
        }];
    }
    case addWeapon: {
      const player = state.find(n => n.id === payload.playerId);
      player.weapon = payload.weapon;
      return [...state];
    }
    case lostLife :{
      const player = state.find(n => n.id === payload);
      const newLife = player.life -1;
      player.life = newLife;
      return [...state];
    }
    default:
      return state;
  }
};

export default reducer;

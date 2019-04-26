import { type as createPlayers } from "../actions/createPlayers";
import { type as addWeapon } from "../actions/addWeapon";

const defaultState = [];
const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case createPlayers: {
      return [payload];
    }
    case addWeapon: {
      return [
        ...state,
          payload
      ];
    }
    default:
      return state;
  }
};

export default reducer;

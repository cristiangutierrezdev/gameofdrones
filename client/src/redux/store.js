import { createStore, combineReducers } from "redux";
import Game from "./reducers/Game";
import Players from "./reducers/Players";

const reducer = combineReducers({
  Game,
  Players
});

const store = createStore(reducer);

export default store;

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import store from './redux/store'

import StartGameView from "./views/StartGameView";
import PlayerOne from "./components/PlayerOne";
import PlayerTwo from "./components/PlayerTwo";
import FightView from "./views/FightView";
import WinnerView from "./views/WinnerView";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <main className="App">
            <Route exact path="/" component={StartGameView} />
            <Route exact path="/p1" component={PlayerOne} />
            <Route exact path="/p2" component={PlayerTwo} />
            <Route exact path="/fight" component={FightView} />
            <Route exact path="/winner" component={WinnerView} />
          </main>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

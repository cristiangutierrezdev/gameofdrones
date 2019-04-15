import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import StartGameView from "./views/StartGameView";
import PlayerOne from "./components/PlayerOne";
import PlayerTwo from "./components/PlayerTwo";
import FightView from "./views/FightView";
import WinnerView from "./views/WinnerView";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Route exact path="/" component={StartGameView} />
          <Route exact path="/p1" component={PlayerOne} />
          <Route exact path="/p2" component={PlayerTwo} />
          <Route exact path="/fight" component={FightView} />
          <Route exact path="/winner" component={WinnerView} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

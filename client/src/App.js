import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import StartGameView from "./views/StartGameView";
import Header from "./components/Header";
import PlayerOne from "./components/PlayerOne";
import PlayerTwo from "./components/PlayerTwo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Route exact path="/round/p1" component={Header} />
          <Route exact path="/round/p2" component={Header} />
          <Route exact path="/round/p1" component={PlayerOne} />
          <Route exact path="/round/p2" component={PlayerTwo} />
          <Route exact path="/" component={StartGameView} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;

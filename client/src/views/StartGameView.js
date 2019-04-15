import React, { Component } from "react";
import { createPlayers, createGame } from "../services/GameServices";
import "./StartGameView.css";

export default class StartGameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {
        player_one: "",
        player_two: ""
      },
      error: false
    };
  }

  onInputChange = e => {
    const { id, value } = e.target;
    const newPlayers = { ...this.state.players };
    newPlayers[id] = value;
    this.setState({
      players: newPlayers
    });
  };

  startGame = async () => {
    const players = await createPlayers(this.state.players);
    if (players) {
      const playersId = players.map(player => {
        return player._id;
      });
      const playersToGame = {
        player_one: playersId[0],
        player_two: playersId[1]
      };
      const game = await createGame(playersToGame);
      game
        ? this.props.history.push({
          pathname: '/p1',
          state: { 
            game: game,
            players: players
           }
        })
        : alert("Has been occurred an error, try again");
    }
  };

  btnStart = () => {
    if (
      this.state.players.player_one === "" ||
      this.state.players.player_two === ""
    ) {
      return <span className="btn">Start Game</span>;
    } else {
      return (
        <span className="btn btn-active" onClick={this.startGame}>
          Start Game
        </span>
      );
    }
  };

  render() {
    return (
      <div className="StartGameView">
        <div className="container">
          <div className="title">
            <h4>Welcome to</h4>
            <h1>Game of drones</h1>
          </div>
          <div className="players-container">
            <div className="p1-army">
              <div className="rock-p1 weapon">
                <img src="./imgs/rock-p1.svg" alt="Rock" />
              </div>
              <div className="paper-p1 weapon">
                <img src="./imgs/paper-p1.svg" alt="Paper" />
              </div>
              <div className="scissors-p1 weapon">
                <img src="./imgs/scissors-p1.svg" alt="Scissors" />
              </div>
            </div>
            <div className="p2-army">
              <div className="rock-p2 weapon">
                <img src="./imgs/scissors-p2.svg" alt="Scissors" />
              </div>
              <div className="paper-p2 weapon">
                <img src="./imgs/paper-p2.svg" alt="Paper" />
              </div>
              <div className="scissors-p2 weapon">
                <img src="./imgs/rock-p2.svg" alt="Rock" />
              </div>
            </div>
          </div>
          {/* PLAYERS NAME */}
          {/* PLAYERS NAME */}
          {/* PLAYERS NAME */}
          <div className="form-container">
            <div className="form">
              <input
                id="player_one"
                className="form-control"
                type="text"
                placeholder="Player 1 name"
                value={this.state.players.player_one}
                onChange={this.onInputChange}
              />
              <h2>VS</h2>
              <input
                id="player_two"
                className="form-control"
                type="text"
                placeholder="Player 2 name"
                value={this.state.players.player_two}
                onChange={this.onInputChange}
              />
            </div>
            <div className="btn-container">
              <h4>Insert names to start the game</h4>
              {this.btnStart()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

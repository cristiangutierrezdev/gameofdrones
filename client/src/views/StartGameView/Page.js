import React, { Component } from "react";
import "./styles.css";

export default class Page extends Component {

  btnStart = () => {
    if (
      this.props.player_one === "" ||
      this.props.player_two === ""
    ) {
      return <span className="btn">Start Game</span>;
    } else {
      return (
        <span className="btn btn-active" onClick={this.props.startGame}>
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
            <input
                id="player_one"
                className="form-control"
                type="text"
                placeholder="Player 1 name"
                value={this.props.player_one}
                onChange={this.props.onInputChange}
              />
              <h2>VS</h2>
              <input
                id="player_two"
                className="form-control"
                type="text"
                placeholder="Player 2 name"
                value={this.props.player_two}
                onChange={this.props.onInputChange}
              />
          </div>
         
            <div className="btn-container">
              <h4>Insert names to start the game</h4>
              {this.btnStart()}
          </div>
        </div>
      </div>
    );
  }
}

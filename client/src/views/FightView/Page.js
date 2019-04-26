import React, { Component } from "react";
import Header from "../../components/Header";
import { hideSiblings } from "../../helpers";
// import {
//   createRound,
//   winsGame,
//   lostsGame,
//   lostslife,
//   getPlayer,
//   getGame
// } from "../../services/GameServices";
import "./styles.css";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bar1: "",
      bar2: ""
    };
    this.Rock_1 = React.createRef();
    this.Paper_1 = React.createRef();
    this.Scissors_1 = React.createRef();
    this.Rock_2 = React.createRef();
    this.Paper_2 = React.createRef();
    this.Scissors_2 = React.createRef();
  }

  setLife = playerLife => {
    if (playerLife === 2) {
      return "66";
    } else if (playerLife === 1) {
      return "33";
    } else if (playerLife < 1) {
      this.props.history.push("/winner");
    }
  };

  btnFight = () => {
    if (this.props.counter > 0) {
      return false;
    } else if (this.props.winner || this.props.tie) {
      return (
        <span className="btn btn-active" onClick={this.props.saveRound}>
          Choose Weapon
        </span>
      );
    } else {
      return (
        <span className="btn btn-active" onClick={this.props.onFight}>
          Fight
        </span>
      );
    }
  };

  renderVs = () => {
    if (this.props.counter > 0) {
      return <h2>{this.props.counter}</h2>;
    } else if (this.props.winner) {
      return (
        <h2 className="wins">
          {this.props.winner}
          <br />
          Wins!
        </h2>
      );
    } else if (this.props.tie) {
      return (
        <h2 className="wins">
          It's a
          <br />
          {this.props.tie}
        </h2>
      );
    } else {
      return <h2>VS</h2>;
    }
  };

  showWeapons = () => {
    if (this.props.winner || this.props.tie) {
      const weaponPlayerOne = `${this.props.player_one.weapon}_1`;
      const weaponPlayerTwo = `${this.props.player_two.weapon}_2`;
      hideSiblings(this[weaponPlayerOne].current);
      hideSiblings(this[weaponPlayerTwo].current);
    }
  };

  render() {
    return (
      <div className="FightView">
        <div className="container">
          <Header />
          <div className="players-container">
            <div className="p1-army">
              <div ref={this.Rock_1} className="rock-p1 weapon">
                <img src="./imgs/rock-p1.svg" alt="Rock" />
              </div>
              <div ref={this.Paper_1} className="paper-p1 weapon">
                <img src="./imgs/paper-p1.svg" alt="Paper" />
              </div>
              <div ref={this.Scissors_1} className="scissors-p1 weapon">
                <img src="./imgs/scissors-p1.svg" alt="Scissors" />
              </div>
            </div>
            <div className="vs">
              <div>{this.renderVs()}</div>
              <div>
                <h3 className="round-wins">Round {this.props.round}</h3>
              </div>
            </div>
            <div className="p2-army">
              <div ref={this.Scissors_2} className="scissors-p2 weapon">
                <img src="./imgs/scissors-p2.svg" alt="Scissors" />
              </div>
              <div ref={this.Paper_2} className="paper-p2 weapon">
                <img src="./imgs/paper-p2.svg" alt="Paper" />
              </div>
              <div ref={this.Rock_2} className="rock-p2 weapon">
                <img src="./imgs/rock-p2.svg" alt="Rock" />
              </div>
            </div>
            <div className="p1-name">
              <h2>{this.props.player_one.player}</h2>
            </div>
            <div className="btn-container">{this.btnFight()}</div>
            <div className="p2-name">
              <h2>{this.props.player_two.player}</h2>
            </div>
            <div className="life-p1">
              <div>
                <h3>Life</h3>
              </div>
              <div className="life-bar">
                <div
                  id="life-p1"
                  className="bar"
                  style={{
                    width: `${this.setLife(this.props.player_one.life)}%`
                  }}
                />
              </div>
            </div>
            <div className="life-p2">
              <div>
                <h3>Life</h3>
              </div>
              <div className="life-bar">
                <div
                  id="life-p2"
                  className="bar"
                  style={{
                    width: `${this.setLife(this.props.player_two.life)}%`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {this.showWeapons()}
      </div>
    );
  }
}

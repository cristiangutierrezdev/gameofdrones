import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
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
    this.state = {};
  }

  btnFight = () => {
    if (this.props.counter > 0) {
      return false;
    } else if (this.props.winner || this.props.tie) {
      return (
        <Link className="btn btn-active" to="/p1">
          Choose Weapon
        </Link>
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

  render() {
    return (
      <div className="FightView">
        <div className="container">
          <Header />
          <div className="players-container">
            <div className="p1-army">
              <div id="rock-p1" className="rock-p1 weapon">
                <img src="./imgs/rock-p1.svg" alt="Rock" />
              </div>
              <div id="paper-p1" className="paper-p1 weapon">
                <img src="./imgs/paper-p1.svg" alt="Paper" />
              </div>
              <div id="scissors-p1" className="scissors-p1 weapon">
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
              <div id="scissors-p2" className="rock-p2 weapon">
                <img src="./imgs/scissors-p2.svg" alt="Scissors" />
              </div>
              <div id="paper-p2" className="paper-p2 weapon">
                <img src="./imgs/paper-p2.svg" alt="Paper" />
              </div>
              <div id="rock-p2" className="scissors-p2 weapon">
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
                <div id="life-p1" className="bar" />
              </div>
            </div>
            <div className="life-p2">
              <div>
                <h3>Life</h3>
              </div>
              <div className="life-bar">
                <div id="life-p2" className="bar" />
              </div>
            </div>
            {/* {this.lostLifebar(this.state.player_one)}
            {this.lostLifebar(this.state.player_two)} */}
          </div>
        </div>
      </div>
    );
  }
}

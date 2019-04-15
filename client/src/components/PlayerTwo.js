import React, { Component } from "react";
import Header from "./Header";

export default class PlayerTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player_name: "",
      player_weapon: ""
    };
  }

  componentWillMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push("/");
    } else {
      this.setState({
        player_name: this.props.location.state.players[1].name
      });
    }
  }

  onReady = () => {
    this.props.history.push({
      pathname: "/fight",
      state: {
        game: this.props.location.state.game,
        players: this.props.location.state.players,
        weapon_player_one: this.props.location.state.weapon_player_one,
        weapon_player_two: this.state.player_weapon
      }
    });
  };

  btnChoose = () => {
    if (this.state.player_weapon === "") {
      return <span className="btn">Ready</span>;
    } else {
      return (
        <span className="btn btn-active" onClick={this.onReady}>
          Ready
        </span>
      );
    }
  };

  chooseWeapon = e => {
    const element = e.target;
    const lastSelected = document.getElementsByClassName("scaled")[0];
    if (lastSelected) {
      lastSelected.classList.remove("scaled");
    }
    element.parentElement.className += " scaled";
    this.setState({
      player_weapon: element.alt
    });
  };

  render() {
    return (
      <div className="PlayerTwo player">
        <Header />
        <div className="p2-army">
          <div className="rock-p2 weapon">
            <img
              src="./imgs/scissors-p2.svg"
              alt="Scissors"
              onClick={this.chooseWeapon}
            />
          </div>
          <div className="paper-p1 weapon">
            <img
              src="./imgs/paper-p2.svg"
              alt="Paper"
              onClick={this.chooseWeapon}
            />
          </div>
          <div className="scissors-p1 weapon">
            <img
              src="./imgs/rock-p2.svg"
              alt="Rock"
              onClick={this.chooseWeapon}
            />
          </div>
        </div>
        <div className="btn-container">
          <h2>{this.state.player_name} choose your weapon</h2>
          {this.btnChoose()}
        </div>
      </div>
    );
  }
}

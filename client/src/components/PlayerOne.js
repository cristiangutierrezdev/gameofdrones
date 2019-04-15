import React, { Component } from "react";

export default class PlayerOne extends Component {
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
           player_name: this.props.location.state.players[0].name
       })
    }
  }

  onReady = () => {
    this.props.history.push({
        pathname: '/round/fight',
        state: { 
          game: this.props.location.state.game,
          players: this.props.location.state.players,
          weapon_player_one: this.state.player_weapon
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
      <div className="PlayerOne player">
        <div className="p1-army">
          <div className="rock-p1 weapon">
            <img
              src="./imgs/rock-p1.svg"
              alt="Rock"
              onClick={this.chooseWeapon}
            />
          </div>
          <div className="paper-p1 weapon">
            <img
              src="./imgs/paper-p1.svg"
              alt="Paper"
              onClick={this.chooseWeapon}
            />
          </div>
          <div className="scissors-p1 weapon">
            <img
              src="./imgs/scissors-p1.svg"
              alt="Scissors"
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

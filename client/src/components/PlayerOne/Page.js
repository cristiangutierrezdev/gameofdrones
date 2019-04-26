import React, { Component } from "react";
import Header from "../Header";

export default class Page extends Component {
  btnChoose = () => {
    if (this.props.player_weapon === "") {
      return <span className="btn">Ready</span>;
    } else {
      return (
        <span className="btn btn-active" onClick={this.props.onReady}>
          Ready
        </span>
      );
    }
  };
  render() {
    return (
      <div className="PlayerOne player">
        <Header />
        <div className="p1-army">
          <div className="rock-p1 weapon">
            <img
              src="./imgs/rock-p1.svg"
              alt="Rock"
              onClick={this.props.chooseWeapon}
            />
          </div>
          <div className="paper-p1 weapon">
            <img
              src="./imgs/paper-p1.svg"
              alt="Paper"
              onClick={this.props.chooseWeapon}
            />
          </div>
          <div className="scissors-p1 weapon">
            <img
              src="./imgs/scissors-p1.svg"
              alt="Scissors"
              onClick={this.props.chooseWeapon}
            />
          </div>
        </div>
        <div className="btn-container">
          <h2>{this.props.player_name} choose your weapon</h2>
          {this.btnChoose()}
        </div>
      </div>
    );
  }
}

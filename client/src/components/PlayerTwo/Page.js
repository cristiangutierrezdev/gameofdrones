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
      <div className="PlayerTwo player">
        <Header />
        <div className="p2-army">
          <div className="scissors-p1 weapon">
            <img
              src="./imgs/scissors-p2.svg"
              alt="Scissors"
              onClick={this.props.chooseWeapon}
            />
          </div>
          <div className="paper-p1 weapon">
            <img
              src="./imgs/paper-p2.svg"
              alt="Paper"
              onClick={this.props.chooseWeapon}
            />
          </div>
          <div className="rock-p2 weapon">
            <img
              src="./imgs/rock-p2.svg"
              alt="Rock"
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

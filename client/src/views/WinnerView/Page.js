import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class WinnerView extends Component {
  render() {
    return (
      <div className="WinnerView">
        <div>
          <h1>WE HAVE A WINNER!</h1>
          <h1>{this.props.winner} is the new Emperor of</h1>
          <h1 className="games-of-drones">Game of drones!</h1>
          <div className="btn-container">
            <a className="btn btn-active" href="/">
              Play Again
            </a>
          </div>
        </div>
      </div>
    );
  }
}

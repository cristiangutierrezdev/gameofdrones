import React, { Component } from "react";
import { addWinner } from "../services/GameServices";
import "./WinnerView.css";

export default class WinnerView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    addWinner(this.props.location.state.game._id, this.props.location.state.winnerid)
  }
  render() {
    return (
      <div className="WinnerView">
        <div>
          <h1>WE HAVE A WINNER!</h1>
          <h1>{this.props.location.state.winner} is the new Emperor of</h1>
          <h1 className="games-of-drones">Game of drones!</h1>
        </div>
      </div>
    );
  }
}

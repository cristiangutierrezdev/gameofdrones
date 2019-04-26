import React, { Component } from "react";
import Page from "./Page";
import { connect } from "react-redux";
import { createPlayer, createGame } from "../../services/GameServices";

class WinnerView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: "",
      game: ""
    };
  }

  componentDidMount() {
    !this.props.players[0].life === 0
      ? this.setState({ winner: this.props.players[0].player })
      : this.setState({ winner: this.props.players[1].player });

    let player_one;
    let player_two;
    const rounds = this.props.game[0].rounds;
    let winner;
    this.savePlayer({ name: this.props.players[0].player })
      .then(player => {
        player.name === this.state.winner
          ? (winner = player._id)
          : (winner = "");
        player_one = player._id;
        return this.savePlayer({ name: this.props.players[1].player });
      })
      .then(player => {
        player.name === this.state.winner
          ? (winner = player._id)
          : (winner = "");
        player_two = player._id;
        return this.saveGame(player_one, player_two, rounds, winner);
      })
      .catch(err => {});
  }

  savePlayer = async player => {
    const newPlayer = await createPlayer(player);
    if (newPlayer) {
      return newPlayer
    }
  };

  saveGame = async (player_one, player_two, rounds, winner) => {
    const gameData = {
      player_one,
      player_two,
      rounds,
      winner
    };
    const game = await createGame(gameData);
    if (game) {
      return game
    }
  };

  render() {
    return <Page winner={this.state.winner} />;
  }
}
const mapStateToProps = state => {
  return {
    players: state.Players,
    game: state.Game
  };
};

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WinnerView);

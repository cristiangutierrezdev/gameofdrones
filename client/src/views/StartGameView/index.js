import React, { Component } from "react";
import { connect } from "react-redux";
// import { createPlayers, createGame } from "../../services/GameServices";
import Page from "./Page";
import createPlayer from "../../redux/actions/createPlayer";

class StartGameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {
        player_one: "",
        player_two: ""
      }
    };
  }

  onInputChange = e => {
    const { id, value } = e.target;
    const newPlayers = { ...this.state.players };
    newPlayers[id] = value;
    this.setState({
      players: newPlayers
    });
  };

  startGame = () => {
    this.props.createPlayer(this.state.players.player_one);
    this.props.createPlayer(this.state.players.player_two);
    this.props.history.push('/p1')
  };

  render() {
    return (
      <Page
        player_one={this.state.players.player_one}
        player_two={this.state.players.player_two}
        onInputChange={this.onInputChange}
        startGame={this.startGame}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.Players
  };
};

const mapDispatchToProps = {
  createPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartGameView);

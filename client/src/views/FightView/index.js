import React, { Component } from "react";
import { connect } from "react-redux";
import { compareChoices } from "../../helpers";
import Page from "./Page";

class FightView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      round_num: 1,
      counter: 0,
      winner: "",
      tie: ""
    };
  }
  componentWillMount() {
    if (
      this.props.players[0] === undefined ||
      this.props.players[1] === undefined
    ) {
      this.props.history.push("/");
    }
  }

  onFight = () => {
    const playerOneWeapon = this.props.players[0].weapon;
    const playerTwoWeapon = this.props.players[1].weapon;
    let counter = 3;
    const interval = setInterval(() => {
      if (counter > 0) {
        this.setState({
          counter: counter
        });
        counter--;
      } else {
        this.setState({
          counter: counter
        });
        console.log( compareChoices(playerOneWeapon, playerTwoWeapon));
        clearInterval(interval);
      }
    }, 1000);
  };

  render() {
    return (
      <Page
        player_one={this.props.players[0]}
        player_two={this.props.players[1]}
        round={this.state.round_num}
        counter={this.state.counter}
        tie={this.state.tie}
        winner={this.state.winner}
        onFight={this.onFight}
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
  // createPlayer
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FightView);

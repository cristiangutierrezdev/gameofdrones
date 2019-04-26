import React, { Component } from "react";
import { connect } from "react-redux";
import { compare } from "../../helpers";
import lostLife from "../../redux/actions/lostLife";
import incRound from "../../redux/actions/incRound";
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
    this.setState({
      round_num: this.props.game[0].roundsNumb
    });
  }

  saveRound = () => {
    const newRound = {
      roundNumb: this.props.game[0].roundsNumb,
      winner: this.state.winner || "tie!"
    };
    this.props.incRound(this.props.game[0].id, newRound);
    this.props.history.push("/p1");
  };

  onFight = () => {
    const playerOneWeapon = this.props.players[0].weapon;
    const playerTwoWeapon = this.props.players[1].weapon;
    let counter = 3;

    const timer = setInterval(() => {
      if (counter > 0) {
        this.setState({
          counter: counter
        });
        counter--;
      } else {
        this.setState({
          counter
        });
        this.chooseWinner(playerOneWeapon, playerTwoWeapon);
        clearInterval(timer);
      }
    }, 1000);
  };

  chooseWinner = async (playerOneWeapon, playerTwoWeapon) => {
    const winner = await compare(playerOneWeapon, playerTwoWeapon);
    if (winner === 1) {
      this.setState({ winner: this.props.players[0].player });
      this.props.lostLife(2);
    } else if (winner === 2) {
      this.setState({ winner: this.props.players[1].player });
      this.props.lostLife(1);
    } else {
      this.setState({ tie: "tie!" });
    }
  };

  goToWinnerPage = () => {
    this.props.history.push("/winner");
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
        saveRound={this.saveRound}
        goToWinnerPage={this.goToWinnerPage}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    players: state.Players,
    game: state.Game
  };
};

const mapDispatchToProps = {
  lostLife,
  incRound
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FightView);

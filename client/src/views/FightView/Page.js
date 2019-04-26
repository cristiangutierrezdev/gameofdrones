import React, { Component } from "react";
import Header from "../../components/Header";
import {
  createRound,
  winsGame,
  lostsGame,
  lostslife,
  getPlayer,
  getGame
} from "../../services/GameServices";
import "./styles.css";

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playersId: "",
      player_one: {
        player_one_name: "Player One",
        weapon_player_one: "",
        life: ""
      },
      player_two: {
        player_two_name: "Player Two",
        weapon_player_two: "",
        life: ""
      },
      players: this.props.location.state.players,
      game: this.props.location.state.game,
      gameid: "",
      round_num: 1,
      counter: 0,
      winner: "",
      tie: ""
    };
  }

  componentWillMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push("/");
    } else {
      this.setState({
        playersId: [
          { playerid: this.props.location.state.players[0]._id },
          { playerid: this.props.location.state.players[1]._id }
        ],
        player_one: {
          player_one_name: this.props.location.state.players[0].name,
          weapon_player_one: this.props.location.state.weapon_player_one,
          life: this.props.location.state.players[0].life
        },
        player_two: {
          player_two_name: this.props.location.state.players[1].name,
          weapon_player_two: this.props.location.state.weapon_player_two,
          life: this.props.location.state.players[1].life
        },
        gameid: this.props.location.state.game._id,
        round_num: this.props.location.state.game.rounds.length + 1
      });
    }
  }
  componentDidMount() {
    this.lostLifebar(this.state.player_one);
    this.lostLifebar(this.state.player_two);
    if (this.state.player_one.life <= 0 || this.state.player_two.life <= 0) {
      this.props.history.push("/");
    }
  }
  lostLifebar = player => {
    setTimeout(() => {
      if (player.life === 2) {
        if (player.player_one_name === this.state.player_one.player_one_name) {
          document.getElementById("life-p1").style.width = "67%";
        } else {
          document.querySelector("#life-p2").style.width = "67%";
        }
      } else if (player.life === 1) {
        if (player.player_one_name === this.state.player_one.player_one_name) {
          document.querySelector("#life-p1").style.width = "33%";
        } else {
          document.querySelector("#life-p2").style.width = "33%";
        }
      }
    }, 1000);
  };
  getPlayers = async playersid => {
    const players = await getPlayer(playersid);
    players
      ? this.setState({
          players: players,
          player_one: {
            player_one_name: players[0].name,
            weapon_player_one: "",
            life: players[0].life
          },
          player_two: {
            player_two_name: players[1].name,
            weapon_player_two: "",
            life: players[1].life
          }
        })
      : console.log("error");
  };
  getGame = async gameid => {
    const game = await getGame(gameid);
    game
      ? this.setState({
          game: game
        })
      : console.log("error");
  };

  chooseWeapon = () => {
    this.props.history.push({
      pathname: "/p1",
      state: {
        game: this.state.game,
        players: this.state.players
      }
    });
  };
  btnFight = () => {
    if (this.state.counter > 0) {
      return false;
    } else if (
      this.state.player_one.player_one_name === "" ||
      this.state.player_two.player_two_name === ""
    ) {
      return <span className="btn">Fight</span>;
    } else if (this.state.winner) {
      return (
        <span className="btn btn-active" onClick={this.chooseWeapon}>
          Choose Weapon
        </span>
      );
    } else if (this.state.tie) {
      return (
        <span className="btn btn-active" onClick={this.chooseWeapon}>
          Choose Weapon
        </span>
      );
    } else {
      return (
        <span className="btn btn-active" onClick={this.onFight}>
          Fight
        </span>
      );
    }
  };

  renderVs = () => {
    if (this.state.counter > 0) {
      return <h2>{this.state.counter}</h2>;
    } else if (this.state.winner) {
      return (
        <h2 className="wins">
          {this.state.winner}
          <br />
          Wins!
        </h2>
      );
    } else if (this.state.tie) {
      return (
        <h2 className="wins">
          It's a
          <br />
          {this.state.tie}
        </h2>
      );
    } else {
      return <h2>VS</h2>;
    }
  };
  winner = () => {
    if (this.state.player_one.life === 0) {
      this.props.history.push({
        pathname: "/winner",
        state: {
          game: this.props.location.state.game,
          winner: this.state.player_two.player_two_name,
          winnerid: this.state.playersId[1]
        }
      });
    } else if (this.state.player_two.life === 0) {
      this.props.history.push({
        pathname: "/winner",
        state: {
          game: this.props.location.state.game,
          winner: this.state.player_one.player_one_name,
          winnerid: this.state.playersId[0]
        }
      });
    }
  };
  render() {
    return (
      <div className="FightView">
        {this.winner()}
        <div className="container">
          <Header />
          <div className="players-container">
            <div className="p1-army">
              <div id="rock-p1" className="rock-p1 weapon">
                <img src="./imgs/rock-p1.svg" alt="Rock" />
              </div>
              <div id="paper-p1" className="paper-p1 weapon">
                <img src="./imgs/paper-p1.svg" alt="Paper" />
              </div>
              <div id="scissors-p1" className="scissors-p1 weapon">
                <img src="./imgs/scissors-p1.svg" alt="Scissors" />
              </div>
            </div>
            <div className="vs">
              <div>{this.renderVs()}</div>
              <div>
                <h3 className="round-wins">Round {this.state.round_num}</h3>
              </div>
            </div>
            <div className="p2-army">
              <div id="scissors-p2" className="rock-p2 weapon">
                <img src="./imgs/scissors-p2.svg" alt="Scissors" />
              </div>
              <div id="paper-p2" className="paper-p2 weapon">
                <img src="./imgs/paper-p2.svg" alt="Paper" />
              </div>
              <div id="rock-p2" className="scissors-p2 weapon">
                <img src="./imgs/rock-p2.svg" alt="Rock" />
              </div>
            </div>
            <div className="p1-name">
              <h2>{this.state.player_one.player_one_name}</h2>
            </div>
            <div className="btn-container">{this.btnFight()}</div>
            <div className="p2-name">
              <h2>{this.state.player_two.player_two_name}</h2>
            </div>
            <div className="life-p1">
              <div>
                <h3>Life</h3>
              </div>
              <div className="life-bar">
                <div id="life-p1" className="bar" />
              </div>
            </div>
            <div className="life-p2">
              <div>
                <h3>Life</h3>
              </div>
              <div className="life-bar">
                <div id="life-p2" className="bar" />
              </div>
            </div>
            {this.lostLifebar(this.state.player_one)}
            {this.lostLifebar(this.state.player_two)}
          </div>
        </div>
      </div>
    );
  }

  onFight = () => {
    let counter = 3;
    const compareChoices = setInterval(() => {
      if (counter > 0) {
        this.setState({
          counter: counter
        });
        counter--;
      } else {
        this.setState({
          counter: counter
        });
        const choices = `${this.state.player_one.weapon_player_one} ${
          this.state.player_two.weapon_player_two
        }`;
        switch (choices) {
          case "Rock Scissors":
            document.querySelector("#paper-p1").style.display = "none";
            document.querySelector("#scissors-p1").style.display = "none";
            document.querySelector("#paper-p2").style.display = "none";
            document.querySelector("#rock-p2").style.display = "none";
            this.setState({
              winner: `${this.state.player_one.player_one_name}`
            });
            const newRound01 = {
              round_num: this.state.round_num,
              weapon_player_one: "Rock",
              weapon_player_two: "Scissors",
              winner: this.props.location.state.players[0]._id
            };
            createRound(this.state.gameid, newRound01).then(game => {
              this.getGame(this.state.gameid);
            });
            winsGame(this.props.location.state.players[0]._id);
            lostsGame(this.props.location.state.players[1]._id);
            lostslife(this.props.location.state.players[1]._id).then(player => {
              this.getPlayers(this.state.playersId);
            });
            break;
          case "Paper Rock":
            document.querySelector("#rock-p1").style.display = "none";
            document.querySelector("#scissors-p1").style.display = "none";
            document.querySelector("#paper-p2").style.display = "none";
            document.querySelector("#scissors-p2").style.display = "none";
            this.setState({
              winner: `${this.state.player_one.player_one_name}`
            });
            const newRound02 = {
              round_num: this.state.round_num,
              weapon_player_one: "Paper",
              weapon_player_two: "Rock",
              winner: this.props.location.state.players[0]._id
            };
            createRound(this.state.gameid, newRound02).then(game => {
              this.getGame(this.state.gameid);
            });
            winsGame(this.props.location.state.players[0]._id);
            lostsGame(this.props.location.state.players[1]._id);
            lostslife(this.props.location.state.players[1]._id).then(player => {
              this.getPlayers(this.state.playersId);
            });
            break;
          case "Scissors Paper":
            document.querySelector("#rock-p1").style.display = "none";
            document.querySelector("#paper-p1").style.display = "none";
            document.querySelector("#scissors-p2").style.display = "none";
            document.querySelector("#rock-p2").style.display = "none";
            this.setState({
              winner: `${this.state.player_one.player_one_name}`
            });
            const newRound03 = {
              round_num: this.state.round_num,
              weapon_player_one: "Scissors",
              weapon_player_two: "Paper",
              winner: this.props.location.state.players[0]._id
            };
            createRound(this.state.gameid, newRound03).then(game => {
              this.getGame(this.state.gameid);
            });
            winsGame(this.props.location.state.players[0]._id);
            lostsGame(this.props.location.state.players[1]._id);
            lostslife(this.props.location.state.players[1]._id).then(player => {
              this.getPlayers(this.state.playersId);
            });
            break;
          case "Rock Paper":
            document.querySelector("#rock-p2").style.display = "none";
            document.querySelector("#scissors-p2").style.display = "none";
            document.querySelector("#paper-p1").style.display = "none";
            document.querySelector("#scissors-p1").style.display = "none";
            this.setState({
              winner: `${this.state.player_two.player_two_name}`
            });
            const newRound04 = {
              round_num: this.state.round_num,
              weapon_player_one: "Rock",
              weapon_player_two: "paper",
              winner: this.props.location.state.players[1]._id
            };
            createRound(this.state.gameid, newRound04).then(game => {
              this.getGame(this.state.gameid);
            });
            winsGame(this.props.location.state.players[1]._id);
            lostsGame(this.props.location.state.players[0]._id);
            lostslife(this.props.location.state.players[0]._id).then(player => {
              this.getPlayers(this.state.playersId);
            });
            break;
          case "Paper Scissors":
            document.querySelector("#rock-p2").style.display = "none";
            document.querySelector("#paper-p2").style.display = "none";
            document.querySelector("#rock-p1").style.display = "none";
            document.querySelector("#scissors-p1").style.display = "none";
            this.setState({
              winner: `${this.state.player_two.player_two_name}`
            });
            const newRound05 = {
              round_num: this.state.round_num,
              weapon_player_one: "Paper",
              weapon_player_two: "Scissors",
              winner: this.props.location.state.players[1]._id
            };
            createRound(this.state.gameid, newRound05).then(game => {
              this.getGame(this.state.gameid);
            });
            winsGame(this.props.location.state.players[1]._id);
            lostsGame(this.props.location.state.players[0]._id);
            lostslife(this.props.location.state.players[0]._id).then(player => {
              this.getPlayers(this.state.playersId);
            });
            break;
          case "Scissors Rock":
            document.querySelector("#scissors-p2").style.display = "none";
            document.querySelector("#paper-p2").style.display = "none";
            document.querySelector("#rock-p1").style.display = "none";
            document.querySelector("#paper-p1").style.display = "none";
            this.setState({
              winner: `${this.state.player_two.player_two_name}`
            });
            const newRound06 = {
              round_num: this.state.round_num,
              weapon_player_one: "Scissors",
              weapon_player_two: "Rock",
              winner: this.props.location.state.players[1]._id
            };
            createRound(this.state.gameid, newRound06).then(game => {
              this.getGame(this.state.gameid);
            });
            winsGame(this.props.location.state.players[1]._id);
            lostsGame(this.props.location.state.players[0]._id);
            lostslife(this.props.location.state.players[0]._id).then(player => {
              this.getPlayers(this.state.playersId);
            });
            break;
          case "Rock Rock":
            document.querySelector("#scissors-p1").style.display = "none";
            document.querySelector("#paper-p1").style.display = "none";
            document.querySelector("#scissors-p2").style.display = "none";
            document.querySelector("#paper-p2").style.display = "none";
            this.setState({
              tie: `tie!`
            });
            const newRound07 = {
              round_num: this.state.round_num,
              weapon_player_one: "Rock",
              weapon_player_two: "Rock"
            };
            createRound(this.state.gameid, newRound07).then(game => {
              this.getGame(this.state.gameid);
            });
            break;
          case "Paper Paper":
            document.querySelector("#scissors-p1").style.display = "none";
            document.querySelector("#rock-p1").style.display = "none";
            document.querySelector("#scissors-p2").style.display = "none";
            document.querySelector("#rock-p2").style.display = "none";
            this.setState({
              tie: `tie!`
            });
            const newRound08 = {
              round_num: this.state.round_num,
              weapon_player_one: "Paper",
              weapon_player_two: "Paper"
            };
            createRound(this.state.gameid, newRound08).then(game => {
              this.getGame(this.state.gameid);
            });
            break;
          case "Scissors Scissors":
            document.querySelector("#paper-p1").style.display = "none";
            document.querySelector("#rock-p1").style.display = "none";
            document.querySelector("#paper-p2").style.display = "none";
            document.querySelector("#rock-p2").style.display = "none";
            this.setState({
              tie: `tie!`
            });
            const newRound09 = {
              round_num: this.state.round_num,
              weapon_player_one: "Paper",
              weapon_player_two: "Paper"
            };
            createRound(this.state.gameid, newRound09).then(game => {
              this.getGame(this.state.gameid);
            });
            break;
          default:
            break;
        }
        clearInterval(compareChoices);
      }
    }, 1000);
  };
}

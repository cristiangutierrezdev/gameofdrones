import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./Page";
import addWeapon from "../../redux/actions/addWeapon";

class PlayerTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weapon: ""
    };
  }
  componentWillMount(){
    if(this.props.players[1] === undefined){
      this.props.history.push("/");
    }
  }
  onReady = () => {
    this.props.addWeapon(2, this.state.weapon)
    this.props.history.push('/fight')
  };

  chooseWeapon = e => {
    const element = e.target;
    const lastSelected = document.getElementsByClassName("scaled")[0];
    if (lastSelected) {
      lastSelected.classList.remove("scaled");
    }
    element.parentElement.className += " scaled";
    this.setState({
      weapon: element.alt
    });
  };

  render() {
    return (
      <Page
        player_name={this.props.players[1].player}
        player_weapon={this.state.weapon}
        onReady={this.onReady}
        chooseWeapon={this.chooseWeapon}
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
  addWeapon
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayerTwo);

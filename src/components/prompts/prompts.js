import React, { Component } from "react";
import "./prompts.css";
import Authenticator from '../Authenticator/Authenticator'

// Imports used for data reformat
// import Categories from '../../constants/Categories'
// import CollectionMap from '../../constants/CollectionMap'
// import { sendReformattedCards } from '../../actions/firestoreactions'

// Redux
import { connect } from "react-redux";
import { GET_TEXT } from "../../store/actions/actionTypes.js";
import BurgerButton from "../displaycategories/burger.js";

import { Link } from "react-router-dom";

class Prompts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text0: "Type your thoughts here",
      text1: "Type your thoughts here",
      text2: "Type your thoughts here",
    };
    this.handleChangeText0 = this.handleChangeText0.bind(this);
    this.handleChangeText1 = this.handleChangeText1.bind(this);
    this.handleChangeText2 = this.handleChangeText2.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("text0") != null) {
      this.setState({ text0: localStorage.getItem("text0") });
    }
    if (localStorage.getItem("text1") != null) {
      this.setState({ text1: localStorage.getItem("text1") });
    }
    if (localStorage.getItem("text2") != null) {
      this.setState({ text2: localStorage.getItem("text2") });
    }
  }

  handleChangeText0 = async function (event) {
    await this.setState({ text0: event.target.value });
    this.props.getText(this.state.text0, 0);
    localStorage.setItem("text0", this.props.text[0]);
  };

  handleChangeText1 = async function (event) {
    await this.setState({ text1: event.target.value });
    this.props.getText(this.state.text1, 1);
    localStorage.setItem("text1", this.props.text[1]);
  };

  handleChangeText2 = async function (event) {
    await this.setState({ text2: event.target.value });
    this.props.getText(this.state.text2, 2);
    localStorage.setItem("text2", this.props.text[2]);
  };

  // THIS FUNCTION REFORMATS THE OLD DATA INTO NEW DATA TO PUT INTO FIREBASE
  // ** USE WITH CAUTION **

  // reformatData = () => {
  //   const categories = Object.values(Categories)
  //   let allCards = {}
  //   for (let i = 0; i < categories.length; i++) {
  //     let categoryCards = JSON.parse(localStorage.getItem(categories[i]))
  //     categoryCards.forEach((card, j) => {
  //       card.id = `${CollectionMap[categories[i]].toUpperCase()}_${j}`
  //       delete card.category
  //     })
  //     allCards[CollectionMap[categories[i]].toUpperCase()] = categoryCards;
  //   }
  //   console.log(allCards)
  //   sendReformattedCards(allCards)
  // }

  render() {
    return (
      <div className="wrapperPrompts">
        <h1 className="wrapper-prompts-title">Questions</h1>
        {/* THIS WAS USED TO TRIGGER THE DATABASE TO BE REFORMATTED */}
        {/* <button onClick={() => this.reformatData()}>Reformat Data</button> */}
        <div className="burger-button-wrapper">
          <BurgerButton />
        </div>
        <div className="prompts">
          <h3>What is your community? </h3>
          <textarea
            value={this.state.text0}
            onChange={this.handleChangeText0}
            id="text0"
            className="textinput"
          />

          <h3>What do you love about your community?</h3>
          <textarea
            value={this.state.text1}
            onChange={this.handleChangeText1}
            id="text1"
            className="textinput"
          />

          <h3>What do you want to change about your community?</h3>
          <textarea
            value={this.state.text2}
            onChange={this.handleChangeText2}
            id="text1"
            className="textinput"
          />
        </div>
        <Link to="/displaycategories">
          <button className="buttonNewPrompts">Choose Cards</button>
        </Link>
        <h3>Made with ♡ by The Black School</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.root.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getText: (text, index) => {
      dispatch({
        type: GET_TEXT,
        text: text,
        index: index,
      });
    },
  };
};

export default Authenticator(connect(mapStateToProps, mapDispatchToProps)(Prompts));

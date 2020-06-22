import React, { Component } from "react";
import "./prompts.css";

// Redux
import { connect } from "react-redux";
import { GET_TEXT } from "../../store/actions/actionTypes.js";

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

  render() {
    return (
      <div className="wrapperPrompts">
        <h1 className="wrapper-prompts-title">Questions</h1>
        <div className="prompts">
          <h3>What's your community? </h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Prompts);

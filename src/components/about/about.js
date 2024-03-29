import React from "react";
import "./about.css";
import Authenticator from '../Authenticator/Authenticator'
import BurgerButton from "../displaycategories/burger.js";

import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="wrapperAbout">
      <div className="burger-button-wrapper">
        <BurgerButton />
      </div>
      <h1 className="wrapperAbout-title">About</h1>
      <div className="exposition-label">
        The Black School Process Cards are a tarot-inspired interactive tool for
        teaching our methodology for designing creative activism projects from a
        Black radical perspective.
        <br></br>
        <br></br>
        Through a series of questions and choices, participants identify issues
        of primary significance to them, define the terms and context around
        those issues, and design impactful projects to address them.
      </div>
      <h1 className="wrapperAbout-title">Instructions</h1>
      <div className="exposition-label">
        Use the cards and the QUESTIONS template to design creative actions.
        Please choose one or two cards from each of the following categories:
      </div>
      <div className="exposition-label bodytext">
      <div className="heading-title">
        {/* PRINCIPLE: goals and issues
        <br></br>
        TACTIC: to act on principles
        <br></br>
        QUESTION: to stimulate thinking on principles
        <br></br>
        MEDIUM: how it’s made
        <br></br>
        FORM: how it looks
        <br></br>
        THEME: to stimulate further creative thinking */}
        PRINCIPLE:
        <br></br>
        TACTIC:
        <br></br>
        QUESTION:
        <br></br>
        MEDIUM:
        <br></br>
        FORM:
        <br></br>
        THEME:
      </div>
      <div className="heading-body">
      Goals and issues
        <br></br>
        To act on principles
        <br></br>
        To stimulate thinking on principles
        <br></br>
        How it’s made
        <br></br>
        How it looks
        <br></br>
        To stimulate further creative thinking
      </div>
      </div>
      <Link to="/prompts">
        <button className="aboutContinueButton">Start</button>
      </Link>
      <h3 className="made-by-tbs">Made with ♡ by The Black School</h3>
    </div>
  );
}

export default Authenticator(About);

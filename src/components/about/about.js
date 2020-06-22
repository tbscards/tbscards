import React from "react";
import "./about.css";

import { Link } from "react-router-dom";

export default function About(props) {
  return (
    <div className="wrapperAbout">
      <h1>About</h1>
      <div className="exposition-label">
        The Black School Process cards are a tarot inspired interactive tool for
        teaching our methodology for designing creative activism projects from a
        Black radical perspective.
        <br></br>
        <br></br>
        Through a series of questions and choices participants identify issues
        of primary significance to them, define the terms and context around
        those issues and design impactful projects to address them
      </div>
      <h1>Instructions</h1>
      <div className="exposition-label">
        Use the cards and PROJECT OUTLINE template to design creative actions.
        Please choose one or two cards from each of the following categories:
      </div>
      <div className="exposition-label about-categories-list">
        PRINCIPLE: goals and issues
        <br></br>
        TACTIC: to act on principles
        <br></br>
        QUESTION: to stimulate thinking on principles
        <br></br>
        MEDIUM: how it’s made
        <br></br>
        FORM: how it looks
        <br></br>
        THEME: to stimulate further creative thinking
      </div>
      <Link to="/prompts">
        <button className="aboutContinueButton">Start</button>
      </Link>
      <h3 className="made-by-tbs">Made with ♡ by The Black School</h3>
    </div>
  );
}

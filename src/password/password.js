import React from "react";
import logo from "./logo/theBlackSchoolLogo.png";
import "./password.css";

export default function Password(props) {
  return (
    <div className="password-wrapper">
      <a href="https://theblack.school/" className="tbs-logo">
        <img src={logo} alt="tbs-logo" width="140px" height="140px" />
      </a>

      <h1 className="process-deck-label">Process Deck</h1>
      <div>{props.error}</div>
      <div className="password-input">
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={props.handleChange}
        ></input>
        <button
          className="buttonNew"
          color="white"
          onClick={props.handlePassword}
        >
          Start
        </button>
      </div>
      <a href="http://theblack.school/shop/" className="shoplink">
        Purchase Deck @ TheBlackSchool
      </a>
    </div>
  );
}

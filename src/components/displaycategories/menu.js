import React from "react";
import { useHistory } from "react-router-dom";
import "./menu.css";

const Menu = ({ open }) => {
  const history = useHistory();

  const logOut = () => {
    console.log("Log Out Pressed");
    // RESET HAND?
    // DELETE ALL CARDS?
    // JUST DELETE TOKEN?
    // ALL OF THE ABOVE?
  };

  return (
    <div className={`menu ${open ? "open" : "closed"}`}>
      <div className="menu-list">
        <div
          className="menu-link"
          onClick={() => {
            history.push("/displaycategories");
          }}
        >
          CATEGORIES
        </div>
        <div
          className="menu-link"
          onClick={() => {
            history.push("/hand");
          }}
        >
          HAND
        </div>
        <div
          className="menu-link"
          onClick={() => {
            history.push("/prompts");
          }}
        >
          QUESTIONS
        </div>
        <div
          className="menu-link"
          onClick={() => {
            history.push("/about");
          }}
        >
          ABOUT
        </div>
        <div
          className="menu-link"
          onClick={() => {
            logOut();
          }}
        >
          LOG OUT
        </div>
      </div>
    </div>
  );
};

export default Menu;

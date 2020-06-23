import React from "react";
import { useHistory } from "react-router-dom";
import "./menu.css";

const Menu = ({ open }) => {
  const history = useHistory();

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
      </div>
    </div>
  );
};

export default Menu;

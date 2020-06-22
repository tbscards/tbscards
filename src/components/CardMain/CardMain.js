import React from "react";
import "./CardMain.css";

const CardMain = ({ title, body, category, selected }) => {
  const categoryBorderColor = (cat, sel) => {
    if (sel == true) return "selected";
    switch (cat) {
      case "PRINCIPLES":
        return "principle";
      case "QUESTIONS":
        return "question";
      case "TACTICS":
        return "tactic";
      case "MEDIUMS":
        return "medium";
      case "FORMS":
        return "form";
      case "THEMES":
        return "theme";
      default:
        return null;
    }
  };

  const mainClass = `CardMain ${categoryBorderColor(category, selected)}`;

  return (
    <div className={mainClass}>
      <h2 className="CardMainCategory">{category}</h2>
      <h1 className="CardMainTitle">{title}</h1>
      <p className="CardMainBody">{body}</p>
    </div>
  );
};

export default CardMain;

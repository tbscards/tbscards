import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./categoryCard.css";

class CategoryCard extends React.Component {
  constructor(props) {
    super(props);
    const { title, contents, onClick } = this.props;

    this.title = title;
    this.contents = contents;
    this.onClick = onClick;
  }

  categoryBorderColor = (cat) => {
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

  render() {
    const { title, contents, onClick } = this;
    return (
      <div
        className={`CategoryCard ${this.categoryBorderColor(title)}`}
        onClick={onClick}
      >
        <div className="CategoryCard-body">
          <div className="title">{title}</div>
          <div className="contents">{contents}</div>
        </div>
      </div>
    );
  }
}

export default CategoryCard;

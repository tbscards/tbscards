import React from "react";
import { useHistory } from "react-router-dom";

import BurgerButton from "./burger.js";
import CategoryCard from "./categoryCard";

import "./displaycategories.css";

export const principleValues = {
  PRINCIPLES: "Goals and issues",
  QUESTIONS: "To stimulate thinking on principles",
  TACTICS: "To act on principals",
  MEDIUMS: "How it’s made",
  FORMS: "How it looks",
  THEMES: "To stimulate further creative thinking",
};

export const principleKeys = [
  "PRINCIPLES",
  "QUESTIONS",
  "TACTICS",
  "MEDIUMS",
  "FORMS",
  "THEMES",
];

const DisplayCategories = (props) => {
  const history = useHistory();
  return (
    <div className="display-categories-wrapper">
      <h1 className="display-categories-title">Categories</h1>
      <div className="exposition-label categories-explain">
        The cards are divided into sections. Determine goal based on your
        answers to the questions and choose one (at most two) cards from each
        category.
      </div>

      <BurgerButton />
      <div className="content-wrapper">
        {principleKeys.map((principleKey, idx) => {
          return (
            <CategoryCard
              onClick={() => {
                history.push("/deck?category=" + principleKey.toLowerCase());
              }}
              key={idx}
              title={principleKey}
              contents={principleValues[principleKey]}
            />
          );
        })}
        <h3>Made with ♡ by The Black School</h3>
      </div>
    </div>
  );
};

export default DisplayCategories;

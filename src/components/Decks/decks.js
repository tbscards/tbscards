// React
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { findAllByTitle } from "@testing-library/react";

const catNames = [
  "principles",
  "mediums",
  "forms",
  "questions",
  "tactics",
  "themes",
];

const Decks = (props) => {
  const routeToCat = (category) => {};
  const history = useHistory();

  const buttons = catNames.map((cat) => {
    return (
      <button
        onClick={() => {
          history.push("/deck?category=" + cat);
        }}
      >
        {cat}
      </button>
    );
  });

  return <>{buttons}</>;
};

export default Decks;

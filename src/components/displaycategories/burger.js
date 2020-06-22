// Burger.js
import React, { useState } from "react";
import "./burger.css";
import Menu from "./menu.js";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (!open) {
      const ticks = document.querySelectorAll(".burger-button div");
      ticks.forEach((element) => {
        element.classList.add("white-background");
      });

      const burgerButton = document.querySelector(".burger-button");
      burgerButton.classList.add("black-background");
    } else {
      const ticks = document.querySelectorAll(".burger-button div");
      ticks.forEach((element) => {
        element.classList.remove("white-background");
      });

      const burgerButton = document.querySelector(".burger-button");
      burgerButton.classList.remove("black-background");
    }
    setOpen(!open);
  };

  return (
    <div className="burger-button-wrapper">
      <div className="burger-button" onClick={onClick}>
        <div />
        <div />
        <div />
      </div>
      <Menu open={open} />
    </div>
  );
};

export default Burger;

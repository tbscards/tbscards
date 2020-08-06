import React from "react";
import { connect } from "react-redux";
import Authenticator from "../Authenticator/Authenticator";

import {
  REMOVE_CARD_FROM_HAND,
  RESET_HAND,
} from "../../store/actions/actionTypes.js";

import CardHand from "../CardHand/CardHand";
import BurgerButton from "../displaycategories/burger.js";

import "./hand.css";

const Hand = (props) => {
  const toText = () => {
    let text = "";

    // Check Questions Answers Here Too

    props.hand.forEach((el) => {
      text += encodeURIComponent("Title: " + el.title) + " %0D%0A";
      text += encodeURIComponent("Category: " + el.category) + " %0D%0A";
      if (el.content && el.content.length > 0)
        text += encodeURIComponent("Definition: " + el.content) + " %0D%0A";
      text += "%0D%0A";
    });
    return text;
  };

  const cards = props.hand.map((el) => {
    const removeFromHand = () => {
      props.onRemoveFromHand(el.id);
    };
    return (
      <div className="card-hand-wrapper" key={el.id}>
        <CardHand
          removeFromHand={removeFromHand}
          title={el.title}
          body={el.content}
          category={el.category}
        />
      </div>
    );
  });

  return (
    <>
      <div className="wrapperHand">
        <div className="burger-button-wrapper">
          <BurgerButton />
        </div>
        <h1 className="hand-title">Hand</h1>
        {cards.length ? (
          <>
            <div className="cards-container">{cards}</div>
            <div
              className="menu-link hand--button"
              onClick={() => {
                let text = toText();
                window.open(
                  `mailto:?subject=The Black School Workshop&body=${text}`
                );
              }}
            >
              E-MAIL HAND
            </div>
            <div
              className="menu-link hand--button"
              onClick={() => {
                props.resetHand();
              }}
            >
              RESET HAND
            </div>
          </>
        ) : (
          <div className="empty-hand-label">
            your hand is empty <br />
            The cards you select from categories will be shown here
          </div>
        )}
        <h3>Made with ♡ by The Black School</h3>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    hand: state.root.hand,
    text: state.root.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromHand: (myCardID) => {
      dispatch({
        type: REMOVE_CARD_FROM_HAND,
        cardID: myCardID,
      });
    },
    resetHand: () => {
      dispatch({
        type: RESET_HAND,
      });
    },
  };
};

export default Authenticator(
  connect(mapStateToProps, mapDispatchToProps)(Hand)
);

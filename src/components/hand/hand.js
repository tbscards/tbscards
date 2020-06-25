import React, { useState } from "react";
import { connect } from "react-redux";

import {
  REMOVE_CARD_FROM_HAND,
  RESET_HAND,
} from "../../store/actions/actionTypes.js";

import CardHand from "../CardHand/CardHand";
import BurgerButton from "../displaycategories/burger.js";

import "./hand.css";

const Hand = (props) => {
  const [mailModal, setMailModal] = useState(false); // To get email from the user
  const [userEmail, setUserEmail] = useState("hello@xyz.com");

  const toText = () => {
    let text = "";

    // Check Questions Answers Here Too

    props.hand.forEach((el) => {
      text += encodeURIComponent("Title: " + el.title) + " %0D%0A";
      text += encodeURIComponent("Category: " + el.category) + " %0D%0A";
      if (el.content && el.content.length > 0)
        text += encodeURIComponent("Body: " + el.content) + " %0D%0A";
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
              className="menu-link"
              onClick={() => {
                console.log("E-MAIL");
                let text = toText();
                console.log(text);
                window.open(
                  `mailto:${encodeURIComponent(
                    userEmail
                  )}?subject=This is the subject&body=${text}`
                );
                setMailModal(true);
              }}
            >
              E-MAIL HAND
            </div>
            <div
              className="menu-link"
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

export default connect(mapStateToProps, mapDispatchToProps)(Hand);

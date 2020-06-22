import React from "react";
import { connect } from "react-redux";

import { REMOVE_CARD_FROM_HAND } from "../../store/actions/actionTypes.js";

import CardHand from "../CardHand/CardHand";
import BurgerButton from "../displaycategories/burger.js";

import "./hand.css";

const Hand = (props) => {
  const cards = props.hand.map((el) => {
    const removeFromHand = () => {
      console.log("here");
      props.onRemoveFromHand(el.id);
    };

    return (
      <div className="card-hand-wrapper">
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
          <div className="cards-container">{cards}</div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hand);

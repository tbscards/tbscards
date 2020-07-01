import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Authenticator from "../Authenticator/Authenticator";
import {
  GET_CARDS_FROM_HAND,
  REMOVE_CARD_FROM_HAND,
} from "../../store/actions/actionTypes.js";

import Card from "../CardHand/CardHand.js";
import ReactCardCarousel from "react-card-carousel";
import BurgerButton from "../displaycategories/burger.js";
import HandIcon from "../../svg/icon_hand.svg";

import "./deck.css";

const Deck = (props) => {
  const history = useHistory();
  // Carousel Reference
  const [carousel, setCarousel] = useState([]);

  // React Router Query Params
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const categoryField = query.get("category");

  const getDeck = (field) => {
    switch (field) {
      case "principles":
        return props.principles;
      case "mediums":
        return props.mediums;
      case "forms":
        return props.forms;
      case "questions":
        return props.questions;
      case "tactics":
        return props.tactics;
      case "themes":
        return props.themes;
      default:
        return props.principles;
    }
  };

  const cards = getDeck(categoryField);

  const getIndex = () => {
    props.onUpdateHand(cards[carousel.getCurrentIndex()]);
  };

  const getRandom = () => {
    carousel.goTo(Math.floor(Math.random() * cards.length));
  };

  const removeFromHand = () => {
    props.onRemoveFromHand(cards[carousel.getCurrentIndex()].id);
  };

  const onClickHand = () => {
    history.push("/hand");
  };

  // Map data into components
  const tar = cards.map((el) => {
    const selected = props.hand.some((ha) => {
      return ha.id === el.id;
    });

    return (
      <Card
        key={el.id}
        title={el.title}
        body={el.content}
        category={el.category}
        selected={selected}
      />
    );
  });

  return (
    <div className="deckWrapper">
      <div className="wrapper-handicon">
        <img
          src={HandIcon}
          alt="Hand Icon"
          className="hand-icon"
          onClick={onClickHand}
        />
      </div>
      <h1 className="deck-label">
        Choose
        <br />
        your cards
      </h1>
      <div className="Carousel">
        <ReactCardCarousel
          spread="wide"
          ref={(Carousel) => setCarousel(Carousel)}
        >
          {tar}
        </ReactCardCarousel>
      </div>
      <BurgerButton />
      <div className="deckButtons">
        <div onClick={getRandom}>Random</div>
        <div onClick={getIndex}>Select</div>
        <div onClick={removeFromHand}>Remove</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    principles: state.root.principles,
    mediums: state.root.mediums,
    forms: state.root.forms,
    questions: state.root.questions,
    tactics: state.root.tactics,
    themes: state.root.themes,
    hand: state.root.hand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateHand: (newCard) => {
      dispatch({
        type: GET_CARDS_FROM_HAND,
        card: newCard,
      });
    },
    onRemoveFromHand: (myCardID) => {
      dispatch({
        type: REMOVE_CARD_FROM_HAND,
        cardID: myCardID,
      });
    },
  };
};
export default Authenticator(
  connect(mapStateToProps, mapDispatchToProps)(Deck)
);

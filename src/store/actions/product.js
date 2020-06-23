import {
  GET_CARDS_FROM_CATEGORY,
  GET_CARDS_FROM_HAND,
  REMOVE_CARD_FROM_HAND,
  SET_HAND,
  GET_TEXT,
  RESET_HAND,
} from "./actionTypes.js";

export const getCardsFromCategory = (myCategory, myCards) => {
  return {
    type: GET_CARDS_FROM_CATEGORY,
    category: myCategory,
    cards: myCards,
  };
};

export const getCardsFromHand = (newCard) => {
  return {
    type: GET_CARDS_FROM_HAND,
    card: newCard,
  };
};

export const removeCardFromHand = (myCardID) => {
  return {
    type: REMOVE_CARD_FROM_HAND,
    cardID: myCardID,
  };
};

export const setHand = (myCards) => {
  return {
    type: SET_HAND,
    cards: myCards,
  };
};

export const getText = (text, index) => {
  return {
    type: GET_TEXT,
    text: text,
    index: index,
  };
};

export const resetHand = () => {
  return {
    type: RESET_HAND,
  };
};

import {
  GET_CARDS_FROM_CATEGORY,
  GET_CARDS_FROM_HAND,
  REMOVE_CARD_FROM_HAND,
  SET_HAND,
  GET_TEXT,
  SET_AUTH,
  RESET_HAND,
} from "../actions/actionTypes.js";

const initialState = {
  principles: [],
  mediums: [],
  forms: [],
  questions: [],
  tactics: [],
  themes: [],
  hand: [],
  text: ["", "", ""],
  auth: null,
};

const collectionToCategory = {
  cards_form: "forms",
  cards_medium: "mediums",
  cards_principle: "principles",
  cards_question: "questions",
  cards_tactic: "tactics",
  cards_theme: "themes",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS_FROM_CATEGORY:
      const reduxCategory = collectionToCategory[action.category];
      return {
        ...state,
        [reduxCategory]: action.cards,
      };
    case GET_CARDS_FROM_HAND:
      let newArray = state.hand.slice();
      let isInHand = false;
      newArray.map((card) => {
        if (card && card.id === action.card.id) {
          isInHand = true;
        }
      });
      if (!isInHand) {
        newArray.push(action.card);
      }
      localStorage.setItem("hand", JSON.stringify(newArray));
      return {
        ...state,
        hand: newArray,
      };
    case REMOVE_CARD_FROM_HAND:
      const newHand = [...state.hand].filter(
        (card) => card.id !== action.cardID
      );
      localStorage.setItem("hand", JSON.stringify(newHand));
      return {
        ...state,
        hand: newHand,
      };
    case SET_HAND:
      return {
        ...state,
        hand: action.cards,
      };
    case GET_TEXT:
      //console.log(action.text)
      let textArray = state.text.slice();
      textArray[action.index] = action.text;

      return {
        ...state,
        text: textArray,
      };
    case SET_AUTH:
      return {
        ...state,
        auth: action.status,
      };
    case RESET_HAND:
      const resetHand = [];
      localStorage.setItem("hand", JSON.stringify(resetHand));
      return {
        ...state,
        hand: resetHand,
      };
    default:
      return state;
  }
};

export default reducer;

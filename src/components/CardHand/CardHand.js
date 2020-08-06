import React from "react";

import PrinciplesBorder from "../../img/Card_Visual_Collateral_02.png";
import QuestionsBorder from "../../img/Card_Visual_Collateral_03.png";
import TacticsBorder from "../../img/Card_Visual_Collateral_04.png";
import MediumsBorder from "../../img/Card_Visual_Collateral_05.png";
import FormsBorder from "../../img/Card_Visual_Collateral_06.png";
import ThemesBorder from "../../img/Card_Visual_Collateral_07.png";
import DeleteIcon from "../../svg/delete_icon.svg";

import Abstract from "../../img/forms/Abstract.png";
import Complexity from "../../img/forms/Complexity.png";
import Depth from "../../img/forms/Depth.png";
import Direction from "../../img/forms/Direction.png";
import Figurative from "../../img/forms/Figurative.png";
import Figure from "../../img/forms/Figure.png";
import Geometric from "../../img/forms/Geometric.png";
import Organic from "../../img/forms/Organic.png";
import Repetition from "../../img/forms/Repetition.png";
import Scale from "../../img/forms/Scale.png";
import Symbolic from "../../img/forms/Symbolic.png";
import Symmetry from "../../img/forms/Symmetry.png";

import "./CardHand.css";

const pickForm = (title) => {
  switch (title) {
    case "Abstract & Gestural":
      return Abstract;
    case "Complexity/ Simplicity":
      return Complexity;
    case "Depth":
      return Depth;
    case "Direction":
      return Direction;
    case "Figurative/ Pictorial/ Representational":
      return Figurative;
    case "Figure/ Ground":
      return Figure;
    case "Geometric":
      return Geometric;
    case "Organic":
      return Organic;
    case "Repetition/ Pattern/ Rhythm":
      return Repetition;
    case "Organic":
      return Organic;
    case "Repetition/ Pattern/ Rhythm":
      return Repetition;
    case "Scale":
      return Scale;
    case "Symbolic":
      return Symbolic;
    case "Symmetry/ Asymmetry":
      return Symmetry;
    default:
      return FormsBorder;
  }
};

export const CategoryBorder = {
  PRINCIPLES: PrinciplesBorder,
  QUESTIONS: QuestionsBorder,
  TACTICS: TacticsBorder,
  MEDIUMS: MediumsBorder,
  FORMS: FormsBorder,
  THEMES: ThemesBorder,
};

const CardHand = ({ title, body, category, removeFromHand, selected }) => {
  console.log(category);
  return (
    <div className="card-hand">
      <img
        src={category === "FORMS" ? pickForm(title) : CategoryBorder[category]}
        alt="GenericCardBorder"
        className="card-hand-border"
      />
      {selected && <div className="selected-tint" />}
      {removeFromHand && (
        <img
          src={DeleteIcon}
          alt="Delete Icon"
          className="delete-icon"
          onClick={removeFromHand}
        />
      )}
      <div className="card-hand-content">
        <div className="card-hand-header">
          <div className="card-hand-category">{category}</div>
        </div>
        <div className="card-hand-inframe">
          <div className="card-hand-title">{title}</div>
          {body.length > 0 ? (
            <div className="card-hand-body">{body}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardHand;

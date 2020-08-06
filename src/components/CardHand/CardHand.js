import React from "react";

import PrinciplesBorder from "../../img/Card_Visual_Collateral_02.png";
import QuestionsBorder from "../../img/Card_Visual_Collateral_03.png";
import TacticsBorder from "../../img/Card_Visual_Collateral_04.png";
import MediumsBorder from "../../img/Card_Visual_Collateral_05.png";
import FormsBorder from "../../img/Card_Visual_Collateral_06.png";
import ThemesBorder from "../../img/Card_Visual_Collateral_07.png";
import DeleteIcon from "../../svg/delete_icon.svg";

import "./CardHand.css";

export const CategoryBorder = {
  PRINCIPLES: PrinciplesBorder,
  QUESTIONS: QuestionsBorder,
  TACTICS: TacticsBorder,
  MEDIUMS: MediumsBorder,
  FORMS: FormsBorder,
  THEMES: ThemesBorder,
};

const CardHand = ({ title, body, category, removeFromHand, selected }) => {
  return (
    <div className="card-hand">
      <img
        src={CategoryBorder[category]}
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
  
       
          <div className='card-hand-inframe'>
          <div className="card-hand-category">{category}</div>
            <div className="card-hand-title">{title}</div>
            {body.length > 0 ? <div className="card-hand-body">{body}</div> : null}
          </div>
          </div>
      </div>
    </div>
  );
};

export default CardHand;

import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { connect } from "react-redux";
import { SET_AUTH } from '../../store/actions/actionTypes.js';
import "./menu.css";

const Menu = (props) => {
  const history = useHistory();

  return (
    <div className={`menu ${props.open ? "open" : "closed"}`}>
      <div className="menu-list">
        <div
          className="menu-link"
          onClick={() => {
            history.push("/displaycategories");
          }}
        >
          CATEGORIES
        </div>
        <div
          className="menu-link"
          onClick={() => {
            history.push("/hand");
          }}
        >
          HAND
        </div>
        <div
          className="menu-link"
          onClick={() => {
            history.push("/prompts");
          }}
        >
          QUESTIONS
        </div>
        <div
          className="menu-link"
          onClick={() => {
            history.push("/about");
          }}
        >
          ABOUT
        </div>
        <div
          className="menu-link"
          onClick={() => {
            Cookies.remove('auth');
            localStorage.clear();
            props.setAuth(false)
          }}
        >
          EXIT
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (auth) => {
      dispatch({
        type: SET_AUTH,
        status: auth,
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(Menu);

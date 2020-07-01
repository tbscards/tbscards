import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import { connect } from "react-redux";
import { SET_AUTH } from '../../store/actions/actionTypes.js';
import "./menu.css";

const Menu = (props) => {
  const history = useHistory();

  const logOut = () => {
    console.log("Log Out Pressed");
    // RESET HAND?
    // DELETE ALL CARDS?
    // JUST DELETE TOKEN?
    // ALL OF THE ABOVE?
  };

  return (
    <div className={`menu ${props.open ? "open" : "closed"}`}>
      <div className="menu-list">
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
            history.push("/prompts");
          }}
        >
          QUESTIONS
        </div>
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
<<<<<<< HEAD
=======
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
>>>>>>> 112592589794f57c6dcdc724302489242b94eb14
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

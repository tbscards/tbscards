import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { SET_AUTH } from "../../store/actions/actionTypes";
import { connect } from "react-redux";
import { compose } from "redux";

const Authenticator = (WrappedComponent) => {
  return class extends Component {
    render() {
      const authExists = !(Cookies.get("auth") === undefined);
      if (authExists) {
        return <WrappedComponent {...this.props} />;
      } else {
        //console.log('You are no longer authenticated, returning Home')
        this.props.setAuth(false);
        localStorage.clear();
        return <Redirect to="/" />;
      }
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: (auth) => {
      dispatch({
        type: SET_AUTH,
        status: auth,
      });
    },
  };
};

const composedAuthenticator = compose(
  connect(null, mapDispatchToProps),
  Authenticator
);

export default composedAuthenticator;

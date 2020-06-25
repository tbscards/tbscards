// Used for checking if cookie expired
// const authExists = !(Cookies.get('auth') === undefined);

import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

const Authenticator = (WrappedComponent) => {
  return class extends Component {
    render() {
      const authExists = !(Cookies.get('auth') === undefined);
      if (authExists) {
        return <WrappedComponent {...this.props} />
      } else {
        console.log('authenticator is redirecting user to "/"')
        return <Redirect to="/" />
      }
    }
  }
}

export default Authenticator;


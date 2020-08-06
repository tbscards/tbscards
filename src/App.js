import React, { Component } from "react";
import Password from "./password/password.js";
import Dashboard from "./dashboard/dashboard.js";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import {
  GET_CARDS_FROM_CATEGORY,
  SET_HAND,
  SET_AUTH,
} from "./store/actions/actionTypes.js";
import { connect } from "react-redux";
import { getAllCards, validatePassword } from "./actions/firestoreactions";
import Categories from "./constants/Categories";
import Cookies from "js-cookie";
import Loading from "./components/loading/loading.js";

class App extends Component {
  state = {
    password: "",
    error: "",
  };

  async componentDidMount() {
    const authExists = !(Cookies.get("auth") === undefined);
    const auth = authExists ? Cookies.get("auth") : "noCookie";
    const isValid = await validatePassword(auth);
    if (isValid) {
      this.props.setAuth(true);
      this.props.history.push("about");
      this.getCards();
    } else {
      this.props.setAuth(false);
    }
  }

  getCards() {
    // Check if the cards exist in localstorage
    if (this.isCardsInLocalStorage()) {
      this.getCardsFromLocalStorage();
    } else {
      this.getCardsFromDatabase();
    }
    if (!!localStorage.getItem("hand")) {
      this.props.onSetHand(JSON.parse(localStorage.getItem("hand")));
    }
  }

  async getCardsFromDatabase() {
    const allCards = await getAllCards();
    this.props.onUpdateCards(Categories.FORM, allCards.FORMS);
    this.props.onUpdateCards(Categories.MEDIUM, allCards.MEDIUMS);
    this.props.onUpdateCards(Categories.PRINCIPLES, allCards.PRINCIPLES);
    this.props.onUpdateCards(Categories.QUESTIONS, allCards.QUESTIONS);
    this.props.onUpdateCards(Categories.TACTIC, allCards.TACTICS);
    this.props.onUpdateCards(Categories.THEME, allCards.THEMES);

    localStorage.setItem(Categories.FORM, JSON.stringify(this.props.forms));
    localStorage.setItem(Categories.MEDIUM, JSON.stringify(this.props.mediums));
    localStorage.setItem(
      Categories.PRINCIPLES,
      JSON.stringify(this.props.principles)
    );
    localStorage.setItem(
      Categories.QUESTIONS,
      JSON.stringify(this.props.questions)
    );
    localStorage.setItem(Categories.TACTIC, JSON.stringify(this.props.tactics));
    localStorage.setItem(Categories.THEME, JSON.stringify(this.props.themes));
  }

  getCardsFromLocalStorage() {
    this.props.onUpdateCards(
      Categories.FORM,
      JSON.parse(localStorage.getItem(Categories.FORM))
    );
    this.props.onUpdateCards(
      Categories.MEDIUM,
      JSON.parse(localStorage.getItem(Categories.MEDIUM))
    );
    this.props.onUpdateCards(
      Categories.PRINCIPLES,
      JSON.parse(localStorage.getItem(Categories.PRINCIPLES))
    );
    this.props.onUpdateCards(
      Categories.QUESTIONS,
      JSON.parse(localStorage.getItem(Categories.QUESTIONS))
    );
    this.props.onUpdateCards(
      Categories.TACTIC,
      JSON.parse(localStorage.getItem(Categories.TACTIC))
    );
    this.props.onUpdateCards(
      Categories.THEME,
      JSON.parse(localStorage.getItem(Categories.THEME))
    );
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePassword = async (event) => {
    const isValid = await validatePassword(this.state.password);
    if (isValid) {
      // Cookie expires in 14 days
      Cookies.set("auth", this.state.password, { expires: 14 });
      this.props.setAuth(true);
      this.props.history.push("about");
      this.getCards();
    } else {
      this.setState({ error: "Password is incorrect" });
    }
  };

  isCardsInLocalStorage = () => {
    const categories = Object.values(Categories);
    for (let i = 0; i < categories.length; i++) {
      if (!localStorage.getItem(categories[i])) {
        return false;
      }
    }
    return true;
  };

  render() {
    const { auth } = this.props;
    if (auth === null) {
      return (
        <Switch>
          <Route
            path="/"
            render={(routeProps) => <Loading {...routeProps} />}
          />
        </Switch>
      );
    } else if (auth) {
      return <Dashboard />;
    } else {
      return (
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => {
              return (
                <Password
                  {...routeProps}
                  handleChange={this.handleChange}
                  handlePassword={this.handlePassword}
                  error={this.state.error}
                />
              );
            }}
          />
          <Route path="/" render={() => <Redirect to="/" />} />
        </Switch>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    principles: state.root.principles,
    mediums: state.root.mediums,
    forms: state.root.forms,
    questions: state.root.questions,
    tactics: state.root.tactics,
    themes: state.root.themes,
    auth: state.root.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateCards: (myCategory, myCards) => {
      dispatch({
        type: GET_CARDS_FROM_CATEGORY,
        category: myCategory,
        cards: myCards,
      });
    },
    onSetHand: (myCard) => {
      dispatch({
        type: SET_HAND,
        cards: myCard,
      });
    },
    setAuth: (auth) => {
      dispatch({
        type: SET_AUTH,
        status: auth,
      });
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

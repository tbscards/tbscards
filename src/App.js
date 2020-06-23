import React, { Component } from "react";
import {
  BrowserRouter as Switch,
  Route,
  withRouter
} from "react-router-dom";
import Password from './password/password.js'
import Dashboard from './dashboard/dashboard.js';
import { 
  GET_CARDS_FROM_CATEGORY, 
  SET_HAND 
} from './store/actions/actionTypes.js';
import { connect } from 'react-redux';
import { getCategory, validatePassword } from './actions/firestoreactions';
import Categories from './constants/Categories';
import Cookies from 'js-cookie';
import Loading from "./components/loading/loading.js";


class App extends Component {

  state = {
    password: '',
    error: '',
    isAuth: null
  }

  async componentDidMount() {
    const authExists = !(Cookies.get('auth') === undefined);
    const auth = authExists ? Cookies.get('auth') : 'noCookie';
    const isValid = await validatePassword(auth);
    if (isValid) {
      this.setState({isAuth: true}, () => this.props.history.push("about"))
      this.getCards()
    } else {
      this.setState({isAuth: false})
    }
  }

  getCards() {
    // Check if the cards exist in localstorage
    if (this.isCardsInLocalStorage()) {
      this.getCardsFromLocalStorage()
    } else {
      this.getCardsFromDatabase()
    }
    if (!!localStorage.getItem('hand')) {
      this.props.onSetHand(JSON.parse(localStorage.getItem('hand')))
    }
  }

  async getCardsFromDatabase() {
    console.log('fetching cards from database...')
    this.props.onUpdateCards(Categories.FORM, await getCategory(Categories.FORM))
    this.props.onUpdateCards(Categories.MEDIUM, await getCategory(Categories.MEDIUM))
    this.props.onUpdateCards(Categories.PRINCIPLES, await getCategory(Categories.PRINCIPLES))
    this.props.onUpdateCards(Categories.QUESTIONS, await getCategory(Categories.QUESTIONS))
    this.props.onUpdateCards(Categories.TACTIC, await getCategory(Categories.TACTIC))
    this.props.onUpdateCards(Categories.THEME, await getCategory(Categories.THEME))

    localStorage.setItem(Categories.FORM, JSON.stringify(this.props.forms))
    localStorage.setItem(Categories.MEDIUM, JSON.stringify(this.props.mediums))
    localStorage.setItem(Categories.PRINCIPLES, JSON.stringify(this.props.principles))
    localStorage.setItem(Categories.QUESTIONS, JSON.stringify(this.props.questions))
    localStorage.setItem(Categories.TACTIC, JSON.stringify(this.props.tactics))
    localStorage.setItem(Categories.THEME, JSON.stringify(this.props.themes))
  }

  getCardsFromLocalStorage() {
    console.log('getting cards from localstorage...')
    this.props.onUpdateCards(Categories.FORM, JSON.parse(localStorage.getItem(Categories.FORM)))
    this.props.onUpdateCards(Categories.MEDIUM, JSON.parse(localStorage.getItem(Categories.MEDIUM)))
    this.props.onUpdateCards(Categories.PRINCIPLES, JSON.parse(localStorage.getItem(Categories.PRINCIPLES)))
    this.props.onUpdateCards(Categories.QUESTIONS, JSON.parse(localStorage.getItem(Categories.QUESTIONS)))
    this.props.onUpdateCards(Categories.TACTIC, JSON.parse(localStorage.getItem(Categories.TACTIC)))
    this.props.onUpdateCards(Categories.THEME, JSON.parse(localStorage.getItem(Categories.THEME)))
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handlePassword = async (event) => {
    const isValid = await validatePassword(this.state.password)
    if (isValid) {
      Cookies.set('auth', this.state.password)
      this.setState({isAuth: true}, () => this.props.history.push("about"))
      this.getCards()
    } else {
      this.setState({error: 'Password is incorrect'})
    }
  }

  isCardsInLocalStorage = () => {
    const categories = Object.values(Categories)
    for (let i = 0; i < categories.length; i++){
      if (!localStorage.getItem(categories[i])) {
        return false
      }
    }
    return true
  }

  render() {
    const {isAuth} =this.state
    return(
      <Switch>
          <Route exact path="/" render={routeProps => {
            if (isAuth === null) {
              return (<Loading {...routeProps} />)
            } else { 
              return (
                <Password 
                {...routeProps} 
                handleChange={this.handleChange} 
                handlePassword={this.handlePassword} 
                error={this.state.error}/>
              )
            }}}
          />
          <Route path="/" render={routeProps => <Dashboard {...routeProps} isAuth={this.state.isAuth} />}/>
      </Switch>
    )
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateCards: (myCategory, myCards) => {
      dispatch({
        type: GET_CARDS_FROM_CATEGORY,
        category: myCategory,
        cards: myCards
      })
    },
    onSetHand: (myCard) => {
      dispatch({
        type: SET_HAND,
        cards: myCard,
      });
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

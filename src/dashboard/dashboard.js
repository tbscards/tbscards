import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import About from "../components/about/about.js"
import Prompts from "../components/prompts/prompts.js"
import Deck from "../components/deck/deck.js"
import Hand from "../components/hand/hand.js"
import Displaycategories from "../components/displaycategories/displaycategories.js"

class Dashboard extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/prompts">
        <Prompts />
        </Route>
        <Route path="/deck">
          <Deck />
        </Route>
        <Route path="/hand">
          <Hand />
        </Route>
        <Route path="/displaycategories">
          <Displaycategories />
        </Route>
      </Switch>
    )
  }
}

export default withRouter(Dashboard);

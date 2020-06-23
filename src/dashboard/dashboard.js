import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import About from "../components/about/about.js"
import Prompts from "../components/prompts/prompts.js"
import Deck from "../components/deck/deck.js"
import Hand from "../components/hand/hand.js"
import Displaycategories from "../components/displaycategories/displaycategories.js"
import Loading from "../components/loading/loading.js"

class Dashboard extends React.Component {
render() {
    return (
        this.props.isAuth ?
        <Router>
          <div>
          {/* Developer links: */}
            {/* <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/prompts">Prompts</Link>
              </li>
              <li>
                <Link to="/deck">Deck</Link>
              </li>
              <li>
                <Link to="/hand">Hand</Link>
              </li>
              <li>
                <Link to="/displaycategories">Display Categories</Link>
              </li>
              <li>
                <Link to="/loading">Loading</Link>
              </li>

            </ul> */}

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
              <Route path="/loading">
                <Loading />
              </Route>
            </Switch>
          </div>
        </Router>


      :
        <Redirect to="/" />
      )
}


}

export default withRouter(Dashboard);

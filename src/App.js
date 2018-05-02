import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchBrews} from './actions/brewsAct';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
// import { BrowserHistory } from 'react-history';

import LandingPage from './components/landing-page';
import BrewList from './components/brewList';
import Calculator from './components/calculators';
import SingleBrew from './components/brew-card';
import RegistrationPage from './components/registration-page';

import {refreshAuthToken, clearAuth } from './actions/auth';
import HeaderBar from './components/header-bar';

class App extends Component {

// componentDidMount() {
//   this.props.dispatch(fetchBrews())
// }

componentDidUpdate(prevProps) {
  if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
  } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
  }
}

// componentDidMount() {
//   setTimeout(() => {
//       this.props.dispatch(clearAuth());
//   }, 60 * 5 * 1000) //logout after 5 min
//   setTimeout(() => {
//       this.props.dispatch(warningAuth());
//   }, 60 * 4 * 1000) //logout after 5 min
// }

componentWillUnmount() {
  this.stopPeriodicRefresh();
}

startPeriodicRefresh() {
  this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 10 * 1000 // update to 10 min
  );
}

stopPeriodicRefresh() {
  if (!this.refreshInterval) {
      return;
  }

  clearInterval(this.refreshInterval);
}

// warning() {
//   if(this.props.warning) {
//       return <h1>Session will end in 1 minute</h1>
//   }
// }

  render() {
    return (
      <Router>
      <div className="App">
        <HeaderBar />
        <main role="main">
        <Calculator />
        <img className="beer-image" typeof="foaf:Image" src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/beer-drink-sample-sampler.png?itok=JV4E4iVY" width="520" height="292" alt="Beers on table"/>
        <Route exact path="/" component={LandingPage} />
        <Switch>
          <Route exact path="/brews" component={BrewList} />
          <Route exact path="/brews/:brewId" component={SingleBrew} />
        </Switch>
        <Route exact path="/register" component={RegistrationPage} />
        </main>
      </div>
      
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
  // warning: state.auth.warning 
});

// "abv.value=(Number(OG.value)-Number(FG.value))* 131.25"

// export default withRouter(connect()(App));

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
export default withRouter(connect(mapStateToProps)(App));

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchBrews} from './actions/brewsAct';
import { Router, Switch, Route } from 'react-router-dom'
import AddBrewForm from './components/add-brew-form';
import BrewList from './components/brewList';
import Calculator from './components/calculators';
import { SingleBrew } from './components/brew-card';


class App extends Component {

componentDidMount() {
  this.props.dispatch(fetchBrews())
}

  render() {
    return (
      // <Router>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">BrewBook</h1>
        </header>
        <Calculator />
        <AddBrewForm />
        <BrewList />
        {/* <Switch>
          <Route exact path="/brews" component={BrewList} />
          <Route exact path="/brews:id" component={SingleBrew} />
        </Switch> */}
      </div>
      // </Router>
    );
  }
}

// "abv.value=(Number(OG.value)-Number(FG.value))* 131.25"

export default connect()(App);

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchBrews} from './actions/brewsAct';
import BrewList from './components/brewList';


class App extends Component {

componentDidMount() {
  this.props.dispatch(fetchBrews())
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">BrewBook</h1>
        </header>
        <div className="brewList">
          <p className="App-intro">
           MY BREWS
          </p>
          <BrewList />
        </div>
      </div>
    );
  }
}

export default connect()(App);

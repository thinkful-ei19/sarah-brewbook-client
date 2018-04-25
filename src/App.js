import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchBrews} from './actions/brewsAct';
import AddBrewForm from './components/add-brew-form';
import BrewList from './components/brewList';
import Calculator from './components/calculators';


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
        <Calculator />
        <AddBrewForm />
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

// "abv.value=(Number(OG.value)-Number(FG.value))* 131.25"

export default connect()(App);

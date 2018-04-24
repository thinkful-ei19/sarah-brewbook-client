import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetchBrews} from './actions/brewsAct';
import AddBrewForm from './components/add-brew-form';
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
        <AddBrewForm />
        <div className="brewList">
          <p className="App-intro">
           MY BREWS
          </p>
          <BrewList />
        </div>
        <form className="calculators">
          <label htmlFor="originalGravity">Original Gravity</label>
          <input id="originalGravity" label="Original Gravity (OG)" />
          <label htmlFor="finalGravity">Final Gravity</label>
          <input id="finalGravity" label="Final Gravity (FG)" />
          <label htmlFor="abv">Alcohol By Volume (ABV)</label>
          <ouput id="abv" label="Alcohol By Volume (ABV)"  />
        </form>
      </div>
    );
  }
}

export default connect()(App);

import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header-bar.css'

 
class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        console.log(this.props)
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={this.logOut.bind(this)}>Log out</button>
            );
        }
        return (
          <header className="header-bar">
        {/* pull this out into header component */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">BrewBook</h1>
          {logOutButton}
        </header>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
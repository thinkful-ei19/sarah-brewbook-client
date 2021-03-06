import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './landing-page.css'

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/brews" />;
    }

    return (
        <div className="home">
            <h1 className="welcome text">Welcome to Brewbook</h1>
            <p className="page-description text">Homebrewers keep track of the beers you brew online with Brewbook! Register for an account below and login to start your book. Keep a list of your brews, recipes and any brewers' notes. Happy Brewing!</p>
            <LoginForm />
            <Link className="lp-link" to="/register">Link to Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

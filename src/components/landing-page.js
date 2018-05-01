import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/brews" />;
    }

    //now need to update the BrewList to render username and protected data(BrewList)

    return (
        <div className="home">
            <h2>Welcome to Brewbook</h2>
            <p className="page-description">Homebrewers keep track of the beers you brew online with Brewbook! Register for an account below and login to start your book. Keep a list of your brews, recipes and any brewers' notes. Happy Brewing!</p>
            <LoginForm />
            <Link to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
// export default connect()(LandingPage);
import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }

    render() {
      return (
        <Router>
          <div className="dashboard">
            <Switch>
              <Route exact path="/brews" component={BrewList} />
              <Route path="/brews/:brewId" component={SingleBrew} />
            </Switch>
          </div>
        </Router>
        );
    }
}

// const mapStateToProps = state => {
//     const {currentUser} = state.auth;
//     return {
//         username: state.auth.currentUser.username,
//         name: `${currentUser.firstName} ${currentUser.lastName}`,
//         protectedData: state.protectedData.data
//     };
// };

export default requiresLogin()(connect()(Dashboard));
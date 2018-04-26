import React from "react"
import { connect } from "react-redux"
import { clearAuth } from "../actions/auth"
import { clearAuthToken } from "../local-storage"
import "./header-bar.css"

export class HeaderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    debugger
    this.props.dispatch(clearAuth())
    clearAuthToken()
    console.log(this.state)
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton
    if (this.props.loggedIn) {
      logOutButton = <button onClick={this.logOut}>Log out</button>
    }
    return (
      <header className="header-bar">
        {/* pull this out into header component */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">BrewBook</h1>
        <button onClick={this.logOut}>Log out</button>
        {logOutButton}
      </header>
    )
  }
}

const mapStateToProps = state => {
  debugger
  return {
    loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(HeaderBar)

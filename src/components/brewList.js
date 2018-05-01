import React from 'react';
import {connect} from 'react-redux';
import { fetchBrews } from '../actions/brewsAct';
import { Link } from 'react-router-dom';
import AddBrewForm from './add-brew-form';
import './brew-list.css';
import requiresLogin from './requires-login';

class BrewList extends React.Component {
  componentDidMount(){
    // console.log(this.state.brews.props)
    this.props.dispatch(fetchBrews())
  }

//setup onClick for brew expand if were to expand onClick
handleOpenBrewClick() {
//   const brew = this.props.brews.brews.filter(brew => brew.id === this.props.id);
  console.log(this.props.brews.brews);
  }


render() {

  console.log(this.props);
  const brewList = this.props.brews.brews.map((brew, index)=>{
    return(
        <li key={brew.id}> 
        <Link to={`/brews/${brew.id}`}>{brew.name}</Link>
        {/* <button onClick={() => this.handleOpenBrewClick(console.log(brew.id))}>Open</button> */}
        </li>
    )
})
  return(
    <div className="brewList">
      <h1>
           MY BREWS
          </h1>
      <ul>
        { brewList }
      </ul>
      <AddBrewForm />
    </div>
  )
}
}

const mapStateToProps = (state) => ({
  brews: state.brews,
  loggedIn: state.auth.currentUser !== null
})

export default requiresLogin()(connect(mapStateToProps)(BrewList));
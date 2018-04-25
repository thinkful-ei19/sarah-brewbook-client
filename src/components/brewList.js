import React from 'react';
import {connect} from 'react-redux';
import { fetchBrews, toggleExpandBrew } from '../actions/brewsAct';
import { Link } from 'react-router-dom';
import './brew-list.css';

class BrewList extends React.Component {
  componentDidMount(){
    // console.log(this.state.brews.props)
    this.props.dispatch(fetchBrews())
  }

//setup onClick for brew expand
handleOpenBrewClick() {
  const brew = this.props.brews.brews.filter(brew => brew.id === this.props.id);
  console.log(this.props.brews.brews);
  }


render() {

  console.log(this.props);
  const brewList = this.props.brews.brews.map((brew, index)=>{
    return(
        <li key={brew.id}> 
        <Link to={`/brews/${brew.id}`}>{brew.name}</Link>
          {/* <div className="recipe">
          <h3>Recipe</h3>
          <p>{ brew.recipe }</p>
          </div>
          <div className="notes">
          <h3>Notes</h3>
          <p>{brew.notes}</p>
          </div> */}
        <button onClick={() => this.handleOpenBrewClick(console.log(brew.id))}>Open</button>
        {/* <button>Edit</button>
        <button>Close</button> */}
        </li>
    )
})
  return(
    <div className="brewList">
      <h1 className="App-intro">
           MY BREWS
          </h1>
      <ul>
        { brewList }
      </ul>
    </div>
  )
}
}

const mapStateToProps = (state) => ({
  brews: state.brews
})

export default connect(mapStateToProps)(BrewList);
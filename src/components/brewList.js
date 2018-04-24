import React from 'react';
import {connect} from 'react-redux';
import { fetchBrews } from '../actions/brewsAct';
import './brew-list.css';

class BrewList extends React.Component {
  componentDidMount(){
    // console.log(this.state.brews.props)
    this.props.dispatch(fetchBrews())
  }


render() {

  console.log(this.props);
  const brewList = this.props.brews.brews.map((brew, index)=>{
    return(
        <li key={index}> {brew.name} </li>
    )
})
  return(
    <div className="brewList">
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
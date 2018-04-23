import React from 'react';
import {connect} from 'react-redux';
import { fetchBrews } from '../actions/brewsAct';
import './brew-list.css';
//import {some action} from '../actions/action'

class BrewList extends React.Component {
  componentDidMount(){
    console.log(this.props)
    this.props.dispatch(fetchBrews())
  }


render() {

  console.log(this.props);
  const brewList = this.props.brews.map((brew, index)=>{
    return(
        <li key={index}> {brew} </li>
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
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from './requires-login';
import { deleteBrew, deleteBrewSuccess } from '../actions/brewsAct';
import './brew-card.css';

//brewcard will open when a brew is clicked. Will have brew name, recipe and notes properties and an expanded property of true. Should redirect to /api/brews/:id. Need to add logic to display in brewlist.

export function SingleBrew(props) {
  if (!props.brew) {
    return ''
  } 

  // function handleClick() {
  //   console.log('clicked:', this);
  // }
  
  // function handleDeleteClick() {
  //   console.log('clicked');
  // }

  return (
    <div className="singleBrew">
      <h2 className="single-brew-header text">{props.brew.name}</h2>
      <div className="recipe">
        <h3 className="recipe-header brew-headers">Recipe</h3>
        <p className="recipe brew-paragraphs">{ props.brew.recipe }</p>
      </div>
      <div className="notes">
        <h3 className="notes-header brew-headers">Notes</h3>
        <p className="notes brew-paragraphs">{props.brew.notes}</p>
      </div>
      <button onClick={(e) => props.dispatch(deleteBrewSuccess(props.brew.id))}>Delete</button>
      <button><Link to={`/brews`}>Back to My Brews</Link></button>
    </div>
    // <li key={ props.id } className="expandedBrew" onClick={() => props.onClick(console.log(props))}>
    // { props.name } { props.recipe } { props.notes }
    // </li>
  )
}

const mapStateToProps = (state, props) => {
  loggedIn: state.auth.currentUser !== null,
  console.log(props);
  const brewId = props.match.params.brewId;
  console.log(brewId);
  const brew = state.brews.brews.find(brew => brew.id === brewId);
  console.log(brew);
  return {brew}
}

export default requiresLogin()(connect(mapStateToProps)(SingleBrew));
import React from 'react';
import { connect } from 'react-redux';

//brewcard will open when a brew is clicked. Will have brew name, recipe and notes properties and an expanded property of true. Should redirect to /api/brews/:id. Need to add logic to display in brewlist.

export function SingleBrew(props) {
  if (!props.brew) {
    return ''
  } 
  return (
    <div className="singleBrew">
      <h2 className="single-brew-header">{props.brew.name}</h2>
      <div className="recipe">
        <h3>Recipe</h3>
        <p>{ props.brew.recipe }</p>
      </div>
      <div className="notes">
        <h3>Notes</h3>
        <p>{props.brew.notes}</p>
      </div>
      <button>Edit</button>
      <button>Close</button>
    </div>
    // <li key={ props.id } className="expandedBrew" onClick={() => props.onClick(console.log(props))}>
    // { props.name } { props.recipe } { props.notes }
    // </li>
  )
}

const mapStateToProps = (state, props) => {
  console.log(props);
  const brewId = props.match.params.brewId;
  console.log(brewId);
  const brew = state.brews.brews.find(brew => brew.id === brewId);
  console.log(brew);
  return {brew}
}

export default connect(mapStateToProps)(SingleBrew);
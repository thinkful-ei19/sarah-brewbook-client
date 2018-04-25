import React from 'react';

//brewcard will open when a brew is clicked. Will have brew name, recipe and notes properties and an expanded property of true. Should redirect to /api/brews/:id. Need to add logic to display in brewlist.

export default function ExpandBrew(props) {
  return (
    <li key={ props.id } className="expandedBrew" onClick={() => props.onClick(console.log(props))}>
    { props.name } { props.recipe } { props.notes }
    </li>
  )
}
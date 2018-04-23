import React from 'react';

//Need to convert to link that opens form. Form will have inputs for name, recipe and brewers notes. Will change state of adding to true.

function AddBrew() {

  return (
    <form className="addBrew" onSubmit={(event)=> {
      event.preventDefault()
      console.log('submit clicked')
    }}>
      <input type="text" name="name" />
      <button>Submit</button>
    </form>
  )
}

export default AddBrew

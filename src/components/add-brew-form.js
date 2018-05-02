import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from '../components/input';
import { required } from '../validators';
import { addBrew, createBrew } from '../actions/brewsAct';
import './add-brew-form.css'

//Need to convert to link that opens form. Form will have inputs for name, recipe and brewers notes. Will change state of adding to true.

export class AddBrewForm extends React.Component{ 
  onSubmit(value) {
       this.props.dispatch(addBrew(value));
       this.props.dispatch(createBrew(value.name, value.recipe, value.notes));

   }
   
   render(){
       return(
          
           <form className="addBrew text"
               onSubmit={this.props.handleSubmit(values =>
                   this.onSubmit(values)
           )}
           >
           <h2>Add a New Brew</h2>
           <label htmlFor="addBrew">Brew:</label>
               <Field 
                   component={Input}
                   element="input"
                   type="text"
                   name="name"
                   placeholder="IPA"
                   validate={[required]}
               />
           <br/>
           <label htmlFor="addRecipe">Recipe:</label>
               <Field 
                   component={Input}
                   element="textarea"
                   type="text"
                   name="recipe"
                   placeholder="add recipe"
                   validate={[required]}

               />
           <br/>
           <label htmlFor="addNotes">Brewer's notes:</label>
               <Field 
                   component={Input}
                   element="textarea"
                   type="text"
                   name="notes"
                   placeholder="add notes here"
               />


               <br/>
               <button type="submit">Submit</button>
           </form>
       )
   }
}

export default reduxForm({
   form: 'brew',
})(AddBrewForm);

// function AddBrew() {

//   return (
//     <form className="addBrew" onSubmit={(event)=> {
//       event.preventDefault()
//       console.log('submit clicked')
//     }}>
//       <input type="text" name="name" />
//       <button>Submit</button>
//     </form>
//   )
// }

// export default AddBrew

import React from "react";
import newTennant from '../requests/newTennant';

//custom Hooks
import { useForm } from '../hooks/useForm';



const CreateTennant = () => {

    const [{firstname, lastname, email, telephone, flat_number }, setInput, resetInput] = useForm({
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    flat_number: '',
  });

  const submitForm = (e) => {
    e.preventDefault()
    newTennant({firstname, lastname, email, telephone, flat_number });
    resetInput(e);
    //console.log("calling",firstname, lastname, email, telephone, flat_number)
  }
 

  return ( 

    <form onSubmit={submitForm} >
    <input
    type="text"
    name="firstname"
    placeholder="First name" 
    value={firstname}
    onChange={setInput}
    />
    <input
    type="text"
    name="lastname"
    placeholder="Last name" 
    value={lastname}
    onChange={setInput}
    />
    <input
    type="email"
    name="email"
    placeholder="Email"
    value={email}
    onChange={setInput}
    />
    <input
    type="telephone"
    name="telephone"
    placeholder="Telephone"
    value={telephone}
    onChange={setInput}
    />
  <label htmlFor="Type">
            Flat Number
    <select
              placeholder="Flat Number"
              name="flat_number"
              value={flat_number}
              onChange={setInput}
            >
             <option value="1A">1A</option>
             <option value="2B">2B</option>
             <option value="3C">3C</option>
             <option value="4D">4D</option>
             <option value="5E">5E</option>
             <option value="6F">6F</option>
             <option value="7G">7G</option>
             <option value="8H">8H</option>
            <option value="9I">9I</option>
            <option value="10J">10J</option>
            </select>
            </label>        
    <button type="submit">Submit</button>
    
    </form>

  ); 
};
 

export default CreateTennant;


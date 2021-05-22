import React from "react";
import newTennant from '../services/newTennant';


//custom Hooks
import { useForm } from '../hooks/useForm';


const CreateTennant = () => {

  const [{firstname, lastname, email, telephone, flat_number }, setInput] = useForm({
    firstname: '',
    lastname: '',
    email: '',
    telephone: '',
    flat_number: '',
  });

  const submitForm = (e) => {
    e.preventDefault()
    newTennant({firstname, lastname, email, telephone, flat_number });
    console.log("calling",firstname, lastname, email, telephone, flat_number)
  }
 
  return ( 

    <form onSubmit={submitForm}>
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
    <input
    type="text"
    name="flat_number"
    placeholder="Flat Number"
    value={flat_number}
    onChange={setInput}
    />
    <button type="submit">Submit</button>
    </form>

  ); 
};

export default CreateTennant;


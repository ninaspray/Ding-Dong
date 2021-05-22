import React from "react";


//custom Hooks
import { useForm } from '../hooks/useForm';


const CreateTennant = () => {

  const [{fullname, email, telephone, flat_number }, setInput] = useForm({
    fullname: '',
    email: '',
    telephone: '',
    flat_number: '',
  });

  const submitForm = (e) => {
    e.preventDefault()
    console.log("calling",fullname, email, telephone, flat_number)
  }
 
  return ( 

    <form onSubmit={submitForm}>
    <input
    type="text"
    name="fullname"
    placeholder="Full name" 
    value={fullname}
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

import React from "react";

//custom Hooks
import { useForm } from '../hooks/useForm';


const CreateTennant = () => {

  const [{fullname, email, telephone }, setInput] = useForm({
    fullname: '',
    email: '',
    telephone: '',
  });

  return ( 

    <form>
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
    placeholder="Conact Number"
    value={telephone}
    onChange={setInput}
    />
    <button type="submit">Submit</button>
    </form>

  );
};

export default CreateTennant;

import React from 'react';
import updatePackage from '../requests/updatePackage';

//custom Hooks
import { useForm } from '../hooks/useForm';

    

const Collection = (packages) => {

    const [{collected}, setInput] = useForm({
    collected: '',
  });

  const submitForm = (e) => {
    e.preventDefault()
    console.log(packages);
    console.log(packages[0]);
    updatePackage(packages.packages[0].id);
    console.log(updatePackage)
    //resetInput(e);
  }
 
  return (  
        <>
      
    <form onSubmit={submitForm}>
    <label htmlFor="Type">
            
    <select
              placeholder="Parcel Size"
              name="Collected"
              value={collected}
              onChange={setInput}
            >
             <option placeholder="Parcel Collected">Parcel Collected</option>
             <option value="Collected">Collected</option>
            </select>
            </label>        

    <button type="submit">Collected</button>
    </form>
    </>
  );
};


export default Collection;
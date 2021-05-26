import React from 'react';
import updatePackage from '../requests/updatePackage';

//custom Hooks
import { useForm } from '../hooks/useForm';

    

const Collection = () => {

    const [{collected}, setInput, resetInput] = useForm({
    collected: '',
  });

  const submitForm = (e) => {
    e.preventDefault()
    updatePackage({collected});
    console.log(updatePackage)
    resetInput(e);
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
import React from 'react';
import updatePackage from '../requests/updatePackage';

//custom Hooks
import { useForm } from '../hooks/useForm';

    

const Collection = (packages) => {

    const [{collected}, setInput, resetInput] = useForm({
    collected: true,
  });

  const submitForm = (e) => {
    e.preventDefault()
    console.log(packages);
    console.log(packages[0]);
    updatePackage(packages.packages[0].id);
    //console.log(updatePackage)
    resetInput(e);
  }
 
  return (  
        <>
    <form onSubmit={submitForm}>       
    <button
              placeholder="Parcel Size"
              name="Collected"
              value={collected}
              onChange={setInput}     
              type="submit">
                Collected</button >
    </form>
    </>
  );
};


export default Collection;
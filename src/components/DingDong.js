import React from 'react';
import newParcel from '../requests/newParcel';

//custom Hooks
import { useForm } from '../hooks/useForm';

    

const SendDingDong = () => {

    const [{size}, setInput] = useForm({
    size: '',
  });

  const submitForm = (e) => {
    e.preventDefault()
    newParcel({size});
    console.log(newParcel)
  }
 
  return (  
        <>
        <h1>   
        Find Tennant Function
        </h1>
      
    <form onSubmit={submitForm}>
    <label htmlFor="Type">
            Parcel Size
    <select
              placeholder="Parcel Size"
              name="size"
              value={size}
              onChange={setInput}
            >
             <option value="Small">Small</option>
             <option value="Medium">Medium</option>
             <option value="Large">Large</option>
            </select>
            </label>        

    <button type="submit">Send Ding Dong</button>
    </form>
    </>
  );
};


export default SendDingDong
import React from 'react';
import newParcel from '../requests/newParcel';

//custom Hooks
import { useForm } from '../hooks/useForm';

    

const SendDingDong = ({tennantId, addParcel}) => {

    const [{size}, setInput, resetInput] = useForm({
    size: '',
  });

  const submitForm = (e) => {
    e.preventDefault()
    newParcel({size}, tennantId).then(parcel => {addParcel(tennantId, parcel)});
    resetInput(e);
  }
 
  return (  
        <>
      
    <form onSubmit={submitForm}>
    <label htmlFor="Type">
            
    <select
              placeholder="Parcel Size"
              name="size"
              value={size}
              onChange={setInput}
            >
              <option placeholder="Parcel Size">Parcel Size</option>
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
import React from "react";
import newTennant from "../requests/newTennant";
import "../styles/Form.css";

//custom Hooks
import { useForm } from "../hooks/useForm";

const CreateTennant = () => {
  const [
    { firstname, lastname, email, telephone, flat_number },
    setInput,
    resetInput,
  ] = useForm({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    flat_number: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    newTennant({ firstname, lastname, email, telephone, flat_number });
    resetInput(e);
    console.log("Tenant has been added!");
  };

  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={submitForm}>
        <input
          className="form__input"
          type="text"
          name="firstname"
          placeholder="First Name."
          value={firstname}
          onChange={setInput}
        />
        <input
          className="form__input"
          type="text"
          name="lastname"
          placeholder="Last Name."
          value={lastname}
          onChange={setInput}
        />
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Email."
          value={email}
          onChange={setInput}
        />
        <input
          className="form__input"
          type="telephone"
          name="telephone"
          placeholder="Telephone."
          value={telephone}
          onChange={setInput}
        />
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="Type">
            Flat Number:
          </label>
          <select
            className="form__dropdown"
            placeholder="Flat Number"
            name="flat_number"
            value={flat_number}
            onChange={setInput}
          >
            <option>Select</option>
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
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTennant;

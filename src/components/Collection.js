import React from "react";
import updatePackage from "../requests/updatePackage";
import "../styles/Table.css";

//custom Hooks
import { useForm } from "../hooks/useForm";

const Collection = (packages) => {
  const [{ collected }, setInput, resetInput] = useForm({
    collected: true,
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(packages);
    console.log(packages[0]);
    updatePackage(packages.packages[0].id);
    resetInput(e);
  };

  return (
    <div className="table__wrapper">
      <form onSubmit={submitForm}>
        <button
          className="table__button"
          placeholder="Parcel Size"
          name="Collected"
          value={collected}
          onChange={setInput}
          type="submit"
        >
          Collected
        </button>
      </form>
    </div>
  );
};

export default Collection;

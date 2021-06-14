import React, { useState } from "react";
import '../styles/Form.css';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          id="search"
          name="search"
          placeholder="Tenant Surname"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button className="form__button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

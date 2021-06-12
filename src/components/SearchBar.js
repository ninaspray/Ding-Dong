import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Tenant Name"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

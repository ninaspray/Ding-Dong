import React, { useState, useEffect } from "react";
import getTennant from "../requests/getTennant";
import TennantRow from "./TennantRow";
import "../styles/Table.css";
import SearchBar from "./SearchBar";

const TenantList = () => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(() => {
    getTennant()
      .then((response) => {
        console.log(response);
        setOriginalList(response.data);
        setList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addParcel = (tennantId, parcel) => {
    setOriginalList((prev) =>
      prev.map((tennant) => {
        if (tennant.id === tennantId) {
          tennant.packages.push(parcel);
        }
        return tennant;
      })
    );
  };

  const onSearch = (searchText) => {
    const filteredList = originalList.filter((ListItem) =>
      ListItem.firstname.toLowerCase().includes(searchText.toLowerCase())
    );
    setList(filteredList);
    console.log(filteredList);
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <span className="table__wrapper">
        <table id="table__send-dingdong">
          <thead>
            <tr className="table__row-head">
              <th>First Name</th>
              <th>Surname</th>
              <th>Apartment</th>
              <th>Notify</th>
            </tr>
          </thead>
          <tbody>
            {list.map((tennant) => (
              <TennantRow
                tennant={tennant}
                key={tennant.id}
                addParcel={addParcel}
              />
            ))}
          </tbody>
        </table>
      </span>
    </div>
  );
};

export default TenantList;

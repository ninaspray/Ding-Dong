import React, { useState, useEffect } from "react";
import getTennant from "../requests/getTennant";
import TennantRow from "./TennantRow";
import "../styles/Table.css";

const TenantList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTennant()
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addParcel = (tennantId, parcel) => {
    setList((prev) =>
      prev.map((tennant) => {
        if (tennant.id === tennantId) {
          tennant.packages.push(parcel);
        }
        return tennant;
      })
    );
  };

  return (
    <div className="table__wrapper">
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
              addParcel={addParcel} /*updateCollection={updateCollection}*/
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenantList;

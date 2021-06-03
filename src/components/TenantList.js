import React, { useState, useEffect } from "react";
import getTennant from "../requests/getTennant";
import TennantRow from "./TennantRow";

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
    <table>
      <tr>
        <td>
          {list.map((tennant) => (
            <TennantRow
              tennant={tennant}
              key={tennant.id}
              addParcel={addParcel}
            />
          ))}
        </td>
      </tr>
    </table>
  );
};

export default TenantList;

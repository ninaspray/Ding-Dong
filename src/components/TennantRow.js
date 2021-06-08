import React from "react";
import SendDingDong from "./SendDingDong";
import Collected from "./Collection";

const TennantRow = ({ tennant, addParcel }) => {
  const { firstname, lastname, flat_number, id, packages } = tennant;
  const filtered = packages.filter((pack) => pack?.collected === false);
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{flat_number}</td>
      {filtered.length === 0 ? (
        <td>
          <SendDingDong tennantId={id} addParcel={addParcel} />
        </td>
      ) : (
        <td>
          <Collected packages={filtered}></Collected>
        </td>
      )}
    </tr>
  );
};

export default TennantRow;

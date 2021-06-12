import React from "react";
import SendDingDong from "./SendDingDong";
import Collected from "./Collection";

const TennantRow = ({ tennant, addParcel, markParcelAsCollected }) => {
  const { firstname, lastname, flat_number, id, packages } = tennant;
  const filtered = packages.filter((pack) => pack?.collected === false);
  console.log(tennant);
  const packageId =
    filtered.length !== 0
      ? filtered.find((pack) => pack.collected === false).id
      : 0;

  return (
    <tr>
      {" "}
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{flat_number}</td>
      {filtered.length === 0 ? (
        <td>
          <SendDingDong tennantId={id} addParcel={addParcel} />
        </td>
      ) : (
        <td>
          <Collected
            tennantId={id}
            packages={filtered}
            markParcelAsCollected={markParcelAsCollected}
            packageId={packageId}
          ></Collected>
        </td>
      )}
    </tr>
  );
};

export default TennantRow;

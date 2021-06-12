import React from "react";
import updatePackage from "../requests/updatePackage";
import "../styles/Table.css";

const Collection = ({
  packages,
  markParcelAsCollected,
  packageId,
  tennantId,
}) => {
  console.log(packages);

  const handleClick = (e) => {
    console.log(packages, "Package has been collectd");
    updatePackage(packageId);
    markParcelAsCollected(tennantId, packageId);
  };

  return (
    <div className="table__wrapper">
      <button className="table__button" onClick={handleClick}>
        Collected
      </button>
    </div>
  );
};

export default Collection;

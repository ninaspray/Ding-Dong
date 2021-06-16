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
    <div className="table__notify-section">
      <button className="table__button" id="collected" onClick={handleClick}>
        Tenant Notified
      </button>
      {/* <p>Click on Collection</p> */}
    </div>
  );
};

export default Collection;

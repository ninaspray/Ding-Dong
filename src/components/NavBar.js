import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="StyledNavWrap">
      <div className="StyledNav">
        <li>
          <Link className="navLink" to="/">Home</Link>
        </li>
        <li>
          <Link className="navLink" to="/Id">Your Details</Link>
        </li>
        <li>
          <Link className="navLink" to="/Create">Create Tennant</Link>
        </li>
        <li>
          <Link className="navLink" to="/tennant">Find Tennant</Link>
        </li>
        <li>
          <Link className="navLink" to="/SendDingDong">Send Ding Dong</Link>
        </li>
        <li>
          <Link className="navLink" to="/BuildingDetails">Building Details</Link>
        </li>
        <li>
          <Link className="navLink" to="/CollectedParcel">Parcel Collected</Link>
        </li>
      </div>
    </div>
  );
};
export default Navigation;
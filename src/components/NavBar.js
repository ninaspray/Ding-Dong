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
          <Link className="navLink" to="/Contact">Contact Concierge</Link>
        </li>
        <li>
          <Link className="navLink" to="/Id">Your Details</Link>
        </li>
        <li>
          <Link className="navLink" to="/Create">Create Tennant</Link>
        </li>
        <li>
          <Link className="navLink" to="/Password">Change Password</Link>
        </li>
        <li>
          <Link className="navLink" to="/BuildingDetails">Building Details</Link>
        </li>
        <li>
          <Link className="navLink" to="/ViewDings">View Dings</Link>
        </li>
      </div>
    </div>
  );
};
export default Navigation;
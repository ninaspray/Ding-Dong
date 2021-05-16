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
          <Link className="navLink" to="/:id">Your Details</Link>
        </li>
        <li>
          <Link className="navLink" to="/change-password">Change Password</Link>
        </li>
        <li>
          <Link className="navLink" to="/building-details">Building Details</Link>
        </li>
        <li>
          <Link className="navLink" to="/view-dings">View Dings</Link>
        </li>
      </div>
    </div>
  );
};
export default Navigation;
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

//styles
import "../styles/NavBar.css";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async (event) => {
    event.preventDefault();
    await logout();
    history.push("/");
  };

  return (
    <div className="StyledNavWrap">
      <ul className="StyledNav">
        {currentUser && (
          <>
            <li>
              <NavLink exact to="/" className="navLink" activeClassName="navLink-active">
                DingDong
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/create" className="navLink" activeClassName="navLink-active">
                Add Tennant
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about-us" className="navLink" activeClassName="navLink-active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/" onClick={handleLogout} className="navLink">
                Log out
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
export default NavBar;

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

//styles
import '../styles/NavBar.css';

const Navigation = () => {

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async event => {
    event.preventDefault();
    await logout();
    history.push('/');
};


  return (
    <div className="StyledNavWrap">
      <div className="StyledNav">
        {currentUser && (
        <li>
          <Link className="navLink" to="/home">Your Details</Link>
        </li>
        )}
        {currentUser && (
        <li>
          <Link className="navLink" to="/Create">Create Tennant</Link>
        </li>
        )}
        {currentUser && (
        <li>
          <Link className="navLink" to="/tennant">Find Tennant</Link>
        </li>
        )}
        {currentUser && (
        <li>
          <Link className="navLink" to="/SendDingDong">Send Ding Dong</Link>
        </li>
        )}
        {currentUser && (
        <li>
          <Link className="navLink" to="/CollectedParcel">Parcel Collected</Link>
        </li>
        )}
        {currentUser && (
        <li>
        <Link to="/" onClick={handleLogout}>
              Log out
         </Link>
        </li>
        )}
        
      </div>
    </div>
  );
};
export default Navigation;
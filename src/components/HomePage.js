import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Login from "./LogIn";
import TenantList from "./TenantList";

const HomePage = () => {
  const { currentUser } = useAuth();
  return currentUser ? <TenantList /> : <Login />;
};

export default HomePage;

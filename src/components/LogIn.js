import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Form.css";

const Login = () => {
  const [{ email, password }, setInput] = useForm({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (e) {
      setError("Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login__component">
      <div className="form__wrapper">
        <form onSubmit={handleSubmit} className="form">
          <input
            className="form__input"
            name="email"
            type="text"
            value={email}
            placeholder="Email."
            onChange={setInput}
          />
          <input
            className="form__input"
            name="password"
            type="password"
            value={password}
            placeholder="Password."
            onChange={setInput}
          />
          {error && <div className="form__error">{error}</div>}
          <button className="form__button" type="submit" disabled={loading}>
            Login
          </button>
          <div>
            <Link className="form__signup-login" to="/sign-up">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

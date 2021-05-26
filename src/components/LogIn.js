import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useAuth } from '../contexts/AuthContext';
import '../styles/LogIn.css'

const Login = () => {
    const [{ email, password }, setInput] = useForm({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const  { login } = useAuth();
    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push('/');
        } catch (e) {
            setError('Failed to sign in');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login__form">
                <div className="login__input-wrapper">
                    {/* <label htmlFor="text-input">email</label> */}
                    <input
                        className="login__input"
                        name="email"
                        type="text"
                        value={email}
                        placeholder="Email."
                        onChange={setInput}
                    />
                </div>
                <div className="login__input-wrapper">
                    {/* <label htmlFor="password-input">password</label> */}
                    <input
                        className="login__input"
                        name="password"
                        type="password"
                        value={password}
                        placeholder="Password."
                        onChange={setInput}
                    />
                </div>
                {error && <div className="login__error">{error}</div>}
                <button className="login__button" type="submit" disabled={loading}>
                    Login
                </button>
                <div>
                    <Link className="login__signup" to="/sign-up">Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
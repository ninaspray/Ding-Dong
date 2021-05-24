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
                    <label htmlFor="text-input">email</label>
                    <input
                        id="text-input"
                        name="email"
                        type="text"
                        value={email}
                        placeholder="e-mail"
                        onChange={setInput}
                    />
                </div>
                <div className="login__input-wrapper">
                    <label htmlFor="password-input">password</label>
                    <input
                        id="password-input"
                        name="password"
                        type="password"
                        value={password}
                        onChange={setInput}
                    />
                </div>
                {error && <div>{error}</div>}
                <button type="submit" disabled={loading}>
                    Log In
                </button>
            </form>
            <div>
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;
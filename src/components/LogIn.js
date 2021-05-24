import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useAuth } from '../contexts/AuthContext';

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
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        placeholder="e-mail"
                        onChange={setInput}
                    />
                </div>
                <div>
                    <input
                        id="password"
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
                Need an account? <Link to="/sign-up">Sign Up</Link>
            </div>
        </>
    );
};

export default Login;
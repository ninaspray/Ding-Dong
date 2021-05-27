import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

//custom Hooks
import { useForm } from '../hooks/useForm';
import { useAuth } from '../contexts/AuthContext';


const Signup = () => {
    const [{email, password, passwordConfirm }, setInput ] = useForm({
        email: '',
        password: '',
        passwordConfirm: '',
    });

const [error, setError] = useState('');
const [loading, setLoading] = useState(false);

    const { signup }  = useAuth();
    const history = useHistory();

const handleSubmit = async event => {
    event.preventDefault();
    event.persist();
    console.log(email, password);
    if (password !== passwordConfirm){
     setError('Passwords do not match');   
    } else {
        try {
            setError('');
            setLoading(true);
            await signup(email, password);
            history.push('/');
        } catch (e) {
            console.log(e.message);
            setError('Failed to create account');
        } finally {
            setLoading(false);
        }
    }
};
return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <input
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
        <div>
            <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                value={passwordConfirm}
                onChange={setInput}
            />
        </div>
        {error && <div>{error}</div>}
        <button type="submit" disabled={loading}>
            Sign Up
        </button>
        <div>
        Already have an account? <Link to="/">Log in</Link>
        </div>
    </form>
    </>
    );
};

export default Signup;

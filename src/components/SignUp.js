import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Form.css';

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
    <div className="signup__component">
        <div className="form__wrapper">
            <form className="form" onSubmit={handleSubmit}>
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
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password."
                    value={password}
                    onChange={setInput}
                />
                <input
                    className="form__input"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirm Password."
                    value={passwordConfirm}
                    onChange={setInput}
                />
                {error && <div className="form__error">{error}</div>}
                <button className="form__button" type="submit" disabled={loading}>
                    Sign Up
                </button>
                <div>
                    <Link className="form__signup-login" to="/">Log in</Link>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Signup;

import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Login from './LogIn';

const HomePage = () => {
    const { currentUser } = useAuth();
    return currentUser ? <div>LIST</div> : <Login />;
}

export default HomePage;
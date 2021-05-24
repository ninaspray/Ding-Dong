import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Login from './LogIn';
import TennatList from './TennatList';

const HomePage = () => {
    const { currentUser } = useAuth();
    return currentUser ? <TennatList /> : <Login />;
}

export default HomePage;
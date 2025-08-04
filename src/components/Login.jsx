import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setError('Name is required');
            return;
        }

        setError('');
        navigate('/level');
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} className="form">
                <h1 className="title">Welcome to React Interviewer</h1>
                <label htmlFor="name" className="label">
                    Enter your name:
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    placeholder="Your name"
                    autoFocus
                />
                {error && <p className="error">{error}</p>}
                <button type="submit" className="button">
                    Next
                </button>
            </form>
        </div>
    );
};

export default Login;

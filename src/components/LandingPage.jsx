import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    let navigate = useNavigate();
    return (
        <div className="landingPage">
            <h1>Welcome, please enter at your own risk</h1>
            <button className="enterButton" onClick={() => navigate('/todo-list')}>Knock, Knock</button>
        </div>
    );
}

export default LandingPage;
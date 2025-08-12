import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LevelSelect.css';

const levels = ['Junior', 'Mid', 'Senior'];

const LevelSelect = () => {
    const [selectedLevel, setSelectedLevel] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        if (!selectedLevel) return alert('Please select a level.');
        navigate('/stepper', { state: { level: selectedLevel } });
    };

    return (
        <div className="level-container">
            <h2 className="level-title">Select Your Level</h2>

            <div className="level-options">
                {levels.map(level => (
                    <button
                        key={level}
                        className={`level-btn ${selectedLevel === level ? 'selected' : ''}`}
                        onClick={() => setSelectedLevel(level)}
                    >
                        {level}
                    </button>
                ))}
            </div>

            <button className="level-next" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default LevelSelect;

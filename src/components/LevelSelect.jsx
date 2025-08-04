import React, { useState } from 'react';
import '../styles/LevelSelect.css';

const levels = ['Junior', 'Mid', 'Senior'];

const LevelSelect = ({ onNext }) => {
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleNext = () => {
        if (!selectedLevel) return alert('Please select a level.');
        onNext(selectedLevel);
    };

    return (
        <div className="level-container">
            <h2 className="level-title">Select your level</h2>

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

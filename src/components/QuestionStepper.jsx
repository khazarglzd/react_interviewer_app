import React, { useState } from 'react';
import './QuestionStepper.css';

const MAX_TOTAL = 20;

const QuestionStepper = ({ onNext }) => {
    const [counts, setCounts] = useState({
        css: 5,
        javascript: 5,
        react: 5,
        principles: 5,
    });

    const total = Object.values(counts).reduce((a, b) => a + b, 0);

    const handleChange = (key, value) => {
        const newCounts = { ...counts, [key]: value };

        const newTotal = Object.values(newCounts).reduce((a, b) => a + b, 0);
        if (newTotal > MAX_TOTAL) return;

        setCounts(newCounts);
    };

    return (
        <div className="stepper-container">
            <h2 className="stepper-title">Adjust Questions (Total 20 Questions)</h2>
            <div className="stepper-grid">
                {Object.entries(counts).map(([key, value]) => (
                    <div className="stepper-box" key={key}>
                        <h3 className="stepper-label">{key.toUpperCase()}</h3>
                        <input
                            type="range"
                            min="0"
                            max="20"
                            value={value}
                            onChange={(e) => handleChange(key, parseInt(e.target.value))}
                            className="stepper-slider"
                        />
                        <div className="stepper-value">{value} question</div>
                    </div>
                ))}
            </div>
            <div className="stepper-total">Total: {total} / 20</div>
            <button
                className="stepper-next"
                disabled={total !== 20}
                onClick={() => onNext(counts)}
            >
                Start Interview
            </button>
        </div>
    );
};

export default QuestionStepper;

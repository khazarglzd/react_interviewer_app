import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startInterview } from '../redux/interviewSlice';
import '../styles/QuestionStepper.css';

const MAX_TOTAL = 20;

const QuestionStepper = () => {
    const [counts, setCounts] = useState({
        css: 5,
        javascript: 5,
        react: 5,
        principles: 5,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = Object.values(counts).reduce((a, b) => a + b, 0);

    const handleChange = (key, value) => {
        if (value < 0 || value > 20) return;

        const newCounts = { ...counts, [key]: value };
        const newTotal = Object.values(newCounts).reduce((a, b) => a + b, 0);
        if (newTotal > MAX_TOTAL) return;

        setCounts(newCounts);
    };

    const handleStart = () => {
        dispatch(startInterview(counts));   // seçilen sayıları Redux’a gönder
        navigate('/interview');             // interview sayfasına yönlendir
    };

    return (
        <div className="stepper-container">
            <h2 className="stepper-title">Adjust Your Interview Questions</h2>

            <div className="stepper-grid">
                {Object.entries(counts).map(([key, value]) => (
                    <div className="stepper-box" key={key}>
                        <h3 className="stepper-label">{key.toUpperCase()}</h3>
                        <div className="stepper-control">
                            <button
                                className="stepper-btn"
                                onClick={() => handleChange(key, value - 1)}
                            >
                                -
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={value}
                                onChange={(e) => handleChange(key, parseInt(e.target.value))}
                                className="stepper-slider"
                            />
                            <button
                                className="stepper-btn"
                                onClick={() => handleChange(key, value + 1)}
                            >
                                +
                            </button>
                        </div>
                        <div className="stepper-value">{value} question</div>
                    </div>
                ))}
            </div>

            <div className="stepper-total">Total Questions: {total} / 20</div>

            <div className="stepper-summary">
                {Object.entries(counts)
                    .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
                    .join(', ')}
            </div>

            <button
                className="stepper-next"
                disabled={total !== 20}
                onClick={handleStart}
            >
                Start Interview
            </button>
        </div>
    );
};

export default QuestionStepper;

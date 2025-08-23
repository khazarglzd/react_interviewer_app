import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
    setAnswer,
    nextQuestion,
    prevQuestion,
    passQuestion,
    finishInterview,
} from "../redux/interviewSlice";
import "../styles/QuestionCard.css"


const categoryColors = {
    css: "#136DB0",
    react: "#61DBFB",
    javascript: "#F7DF1E",
    principles: "#8E44AD",
};

const QuestionCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questions, currentIndex, answers, status } = useSelector(
        (state) => state.interview
    );

    if (status !== "inProgress" || questions.length === 0) {
        return <div className="questioncard-empty">No questions loaded.</div>;
    }

    const question = questions[currentIndex];
    const selectedAnswer = answers[currentIndex] || null;

    const handleSelect = (option) => {
        dispatch(setAnswer({ index: currentIndex, answer: option }));
    };

    const handleNext = () => {
        if (currentIndex === questions.length - 1) {
            dispatch(finishInterview());
            navigate('/results');
        } else {
            dispatch(nextQuestion());
        }

    };

    const handlePrev = () => {
        dispatch(prevQuestion());
    };

    const handlePass = () => {
        dispatch(passQuestion());
    };


    const color = categoryColors[question.category] || "#136DB0";
    const textColor = question.category === "javascript" ? "#000" : "#fff"; // JS için siyah yazı okunaklı

    console.log("CATEGORY:", question.category);
    return (
        <div className="questioncard">
            <h2 className="questioncard-title">
                Q{currentIndex + 1}. {question.question}
            </h2>

            <div className="questioncard-options">
                {question.options.map((option, i) => (
                    <label
                        key={i}
                        className={`questioncard-option ${selectedAnswer === option ? "selected" : ""}`}
                        style={{
                            backgroundColor: selectedAnswer === option ? color : "transparent",
                            border: `2px solid ${color}`,
                            color: selectedAnswer === option ? textColor : color,
                        }}
                    >
                        <input
                            type="radio"
                            name={`question-${currentIndex}`}
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={() => handleSelect(option)}
                        />
                        {option}
                    </label>
                ))}
            </div>

            <div className="questioncard-buttons">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="btn back"
                >
                    Back
                </button>

                <button onClick={handlePass} className="btn pass">
                    Pass
                </button>

                <button
                    onClick={handleNext}
                    className="btn next"
                >
                    {currentIndex === questions.length - 1 ? "Finish" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default QuestionCard;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setAnswer,
    nextQuestion,
    prevQuestion,
    passQuestion,
    finishInterview,
} from "../store/interviewSlice";
import "./QuestionCard.css";

const QuestionCard = () => {
    const dispatch = useDispatch();
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

    return (
        <div className="questioncard">
            <h2 className="questioncard-title">
                Q{currentIndex + 1}. {question.question}
            </h2>


            <div className="questioncard-options">
                {question.options.map((option, i) => (
                    <label
                        key={i}
                        className={`questioncard-option ${selectedAnswer === option ? "selected" : ""
                            }`}
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

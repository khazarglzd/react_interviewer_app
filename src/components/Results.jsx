import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetInterview } from "../redux/interviewSlice";
import { useNavigate } from "react-router-dom";
import "../styles/Results.css";

const Results = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { score, total, categoryScores, username, level } = useSelector(
        (state) => state.interview
    );

    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const handleRestart = () => {
        dispatch(resetInterview());
        navigate("/");
    };

    return (
        <div className="result-container">
            <h1 className="result-title">
                Interview Results of{" "}
                <span className="highlight">{username || "Guest"}</span>
            </h1>

            <p className="result-text">
                Score: <span className="highlight">{score}</span> / {total}
            </p>

            <p className="result-percentage">{percentage}%</p>

            <div className="result-breakdown">
                <h2 className="breakdown-title">
                    Category Breakdown of{" "}
                    <span className="highlight">
                        {level
                            ? level.charAt(0).toUpperCase() + level.slice(1)
                            : "N/A"}
                    </span>
                    :
                </h2>
                <ul className="breakdown-list">
                    {Object.entries(categoryScores).map(
                        ([category, { correct, total }]) => (
                            <li key={category} className="breakdown-item">
                                <span className="breakdown-category">
                                    {category}
                                </span>
                                <span className="breakdown-score">
                                    {correct} / {total}
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>

            <button onClick={handleRestart} className="result-btn">
                Start Again
            </button>
        </div>
    );
};

export default Results;

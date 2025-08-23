import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetInterview } from "../redux/interviewSlice";
import { useNavigate } from "react-router-dom";

const Results = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { score, total, categoryScores } = useSelector(
        (state) => state.interview
    );

    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const handleRestart = () => {
        dispatch(resetInterview());
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto mt-12 p-8 bg-white shadow-lg rounded-2xl text-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">Interview Results</h1>


            <p className="text-xl font-semibold mb-2">
                Score: <span className="text-green-600">{score}</span> / {total}
            </p>


            <p className="text-lg mb-6">
                Percentage: <span className="font-bold">{percentage}%</span>
            </p>


            <div className="text-left mb-6">
                <h2 className="text-lg font-semibold mb-2">Category Breakdown:</h2>
                <ul className="space-y-1">
                    {Object.entries(categoryScores).map(([category, { correct, total }]) => (
                        <li key={category} className="text-gray-700">
                            <span className="font-medium capitalize">{category}:</span>{" "}
                            <span className="text-blue-600">{correct}</span> / {total}
                        </li>
                    ))}
                </ul>
            </div>


            <button
                onClick={handleRestart}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
            >
                Start Again
            </button>
        </div>
    );
};

export default Results;

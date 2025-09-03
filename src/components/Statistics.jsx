import React from "react";
import "../styles/Statistics.css"



const Statistics = () => {


    return (
        <div className="statistics-container">
            <h2 className="statistics-title">Interview Statistics</h2>

            <p className="statistics-empty">No interviews yet.</p>

            <table className="statistics-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        </div>
    );
};

export default Statistics;

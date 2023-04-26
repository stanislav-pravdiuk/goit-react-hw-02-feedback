import React from "react";

const Statistics = ({good, neutral, bad}) => (
    <div className="feedback__statistics">
        <h1>Statistics</h1>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
    </div>
)

export default Statistics;
import React from "react";
import notificationMessage from "../utils/NotificationMessage";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    total !== 0
        ? (
            <div className="feedback__statistics">
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
                <span>Total: {total}</span>
                <span>Positive feddback: {positivePercentage}%</span>
            </div>
        )
        
        : (<p>{notificationMessage}</p>)
    )

export default Statistics;
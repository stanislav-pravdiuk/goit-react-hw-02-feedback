import React from "react";

const FeedbackOptions = ({onLeaveFeedback}) => (
    <div className="feedback__controls">
        <form>
            <label>Please leave feedback</label>
            <button
                type="button"
                onClick={onLeaveFeedback}
                name="good">Good</button>
            <button
                type="button"
                onClick={onLeaveFeedback}
                name="neutral">Neutral</button>
            <button
                type="button"
                onClick={onLeaveFeedback}
                name="bad">Bad</button>
        </form>
    </div>
);

export default FeedbackOptions;
import React from "react";

const Controls = ({onLeaveFeedback}) => (
    <div className="feedback__controls">
        <form>
            <label>Please leave feedback</label>
            <button type="button" onClick={onLeaveFeedback}>Good</button>
            <button type="button" onClick={onLeaveFeedback}>Neutral</button>
            <button type="button" onClick={onLeaveFeedback}>Bad</button>
        </form>
    </div>
);

export default Controls;
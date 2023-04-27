import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({onLeaveFeedback, options}) => (
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

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.string,
};

export default FeedbackOptions;
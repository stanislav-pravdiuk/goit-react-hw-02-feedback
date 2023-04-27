import React from "react";
import PropTypes from 'prop-types';
import css from './feedback-options.module.css'

const FeedbackOptions = ({onLeaveFeedback, options}) => (
    <div className="feedbackOptions">
        <form className={css.feedbackOptions__form}>
            <label>Please leave feedback</label>
            <div className={css.feedbackOptions__blockBtn}>
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
            </div>
        </form>
    </div>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.string,
};

export default FeedbackOptions;
import React from "react";
import PropTypes from 'prop-types';
import css from './feedback-options.module.css'

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
    
    <div className="feedbackOptions">
        <form className={css.feedbackOptions__form}>
            <label>Please leave feedback</label>
            <div className={css.feedbackOptions__blockBtn}>
                {options.map(btn =>
                    <button
                        key={btn}
                        type="button"
                        onClick={onLeaveFeedback}
                        name={btn}>{btn}
                    </button>)}
            </div>
        </form>
    </div>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
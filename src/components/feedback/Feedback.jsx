import React, { Component } from "react";
import FeedbackOptions from "components/fedback-options/FeedbackOptions";
import Statistics from "../statistics/Statistics";
import Section from "../section/Section";
import Notification from "components/notification/Notification";
import PropTypes from 'prop-types';

class Feedback extends Component{
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
        initialTotal: 0,
        initialPositiveFeedback: 0,
    };

    // static propTypes = {
    //     initialGood: this.propTypes.number.isRequired,
    //     initialNeutral: this.propTypes.number.isRequired,
    //     initialBad: this.propTypes.number.isRequired,
    //     initialTotal: this.propTypes.number.isRequired,
    //     initialPositiveFeedback: this.propTypes.number.isRequired,
    // }

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
        total: this.props.initialTotal,
        positiveFeedback: this.props.initialPositiveFeedback,
    };
    
    handleLeaveFeedback = (event) => {
        const {name} = event.currentTarget

        this.setState((prevState) => ({
            [name]: prevState[name] + 1,
        }));
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    };

    countTotalFeedback = () => {
        this.setState((prevState) => ({
            total: prevState.good + prevState.bad + prevState.neutral
        }))
    }

    countPositiveFeedbackPercentage = () => {
        this.setState((prevState) => ({
            positiveFeedback: Math.round(prevState.good * 100 / prevState.total)
        }))
    }

    render() {
        return (
            <div className="feedback">
                
                <Section title=''>
                    <FeedbackOptions
                        onLeaveFeedback={this.handleLeaveFeedback}
                        options={"?"}
                    />
                </Section>
                
                <Section title="Statistics">
                    {this.state.total !== 0
                        ? (
                            <Statistics
                                good={this.state.good}
                                neutral={this.state.neutral}
                                bad={this.state.bad}
                                total={this.state.total}
                                positivePercentage={this.state.positiveFeedback}
                            />
                        )
                    
                        : (<Notification message="There is no feedback" />)}
                </Section>

            </div>
        )
    }
};

Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
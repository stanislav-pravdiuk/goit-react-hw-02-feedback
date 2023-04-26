import React, { Component } from "react";
import Controls from "components/FeedbackOptions";
import Statistics from "./Statistics";

class Feedback extends Component{
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    };

    // static propTypes = {

    // }

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    };
    
    handleLeaveFeedback = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }));
    };

    render() {
        return (
            <div className="feedback">
                <Controls
                    onLeaveFeedback={this.handleLeaveFeedback}
                    options={"?"}
                />
                
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={"?"}
                    positivePercentage={"?"}
                />


            </div>
        )
    }
};

export default Feedback;
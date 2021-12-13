// import { Component } from 'react';
// import PropTypes from 'prop-types';

// // компоненты

// import FeedbackOptions from './components/FeedbackOptions/index';
// import Statistics from './components/Statistics/index';
// import Notification from './components/Notification/index';
// import Section from './components/Section/index';

// // данные


// export default class feedback extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
// 	};

// 	static propTypes = {
// 		good: PropTypes.number,
// 		neutral: PropTypes.number,
// 		bad: PropTypes.number,
// 		total: PropTypes.number,
//         positivePercentage: PropTypes.number,
//         title: PropTypes.string,
// 		options: PropTypes.string,
// 		onLeaveFeedback: PropTypes.func,
// 	};

//     onClickBtn = option => {
//         this.setState(prevState => ({
//             [option]: prevState[option] + 1,
//         }));
//     };

//     countTotalFeedback = () => {
//         return this.state.good + this.state.neutral + this.state.bad;
//     };

//     countPositiveFeedbackPercentage = () => {
//         return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
//     };

//     render() {
//         return (
//             <>
//             <Section title="Please leave feedback">
//                 <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onClickBtn} />
//             </Section>
//             <Section title="Statistics">
//             {this.countTotalFeedback() > 0 ? (
//                 <Statistics
//                     good={this.state.good}
//                     neutral={this.state.neutral}
//                     bad={this.state.bad}
//                     total={this.countTotalFeedback()}
//                     positivePercentage={this.countPositiveFeedbackPercentage()}
//                 />
//             ) : (
//                 <Notification message="No feedback given" />
//             )}
//             </Section>
//             </>
//         );
//     }
// }

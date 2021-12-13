// import logo from './logo.svg';
// import './App.css';
// import feedback from './feedback/feedback';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { Component } from 'react';
import PropTypes from 'prop-types';

// компоненты

import FeedbackOptions from './components/FeedbackOptions/feedbackOptions';
import Statistics from './components/Statistics/statistics';
import Notification from './components/Notification/notification';
import Section from './components/Section/section';

// данные

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
    title: PropTypes.string,
    options: PropTypes.string,
    onLeaveFeedback: PropTypes.func,
  };

  onClickBtn = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        {/* <Section title="Please leave feedback"> */}
        <Section title="Пожалуйста, оставьте отзыв">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClickBtn}
          />
        </Section>
        {/* <Section title="Statistics"> */}
        <Section title="Статистика">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            // <Notification message="No feedback given" />
            <Notification message="нет ни одного отзыва" />
          )}
        </Section>
      </>
    );
  }
}

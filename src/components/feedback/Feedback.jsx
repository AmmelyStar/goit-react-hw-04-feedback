
import Statistics from '../statistic/Statictics';
import FeedbackOptions from '../feedbackOptions/FeedbackOption';
import { Notification } from 'components/notification/Notification';
import Section from 'components/section/Section';
import { useState, useEffect } from 'react';

const Feedback = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
    
    
  const countTotal = () => {
    const { good, neutral, bad } = feedbackState;
    return good + neutral + bad;
  };
     
  const onLeaveFeedback = (type) => {
    setFeedbackState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
    };
  

  const countPositivePercent = () => {
    const { good } = feedbackState;
    const total = countTotal();
    const percent = total > 0 ? Math.round((good / total) * 100) : 0;
    return percent;
    };
    
       useEffect(() => {
       }, [feedbackState]);
    
    const { good, neutral, bad } = feedbackState;
    const total = countTotal();
    const percent = countPositivePercent();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options = {Object.keys(feedbackState)}
        />
        </Section>
        
        
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }

  export default Feedback;



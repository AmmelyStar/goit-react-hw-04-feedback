import css from './styles.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.container}>
    {options.map((option) => (
        
        <button
            className={css.btn}
        key={option}
        onClick={() => onLeaveFeedback(option)}
            
            type="button">
           
          
            {option}
          </button>
         
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


import './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);

  return (
    <div>
      {stateArr.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

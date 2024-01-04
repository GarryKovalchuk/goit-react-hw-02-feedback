import css from './Statistics.module.css';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <ul>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>

      <li>
        Total: <span>{total}</span>
      </li>
      <li className={css.positive}>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

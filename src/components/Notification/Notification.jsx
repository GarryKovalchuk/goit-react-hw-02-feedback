import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return message && <p className={css.p}>{message}</p>;
};

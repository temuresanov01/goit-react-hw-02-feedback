import styles from './notification.module.css';

export default function Notification ({ message }) {
  return (
      <p className={styles.notification}>{message}</p>
  );
}
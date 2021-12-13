import styles from './statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <section className={styles.statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </section>
    );
}
import s from './statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <section className={s.statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </section>
    );
}
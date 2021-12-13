import styles from './feedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <section className={styles.feedbackSection}>
            <div className={styles.buttons}>
                {options.map(option => (
                    <button
                        key={option}
                        type="button"
                        className={styles.button}
                        onClick={() => onLeaveFeedback(option)}
                    >
                    {option}
                    </button>
                ))}
            </div>
        </section>
    );
}
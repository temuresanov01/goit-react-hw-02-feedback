import s from './feedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <section className={s.feedbackSection}>
            <div className={s.buttons}>
                {options.map(option => (
                    <button
                        key={option}
                        type="button"
                        className={s.button}
                        onClick={() => onLeaveFeedback(option)}
                    >
                    {option}
                    </button>
                ))}
            </div>
        </section>
    );
}
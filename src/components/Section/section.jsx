import styles from './section.module.css';

export default function Section({ title, children }) {
    return (
        <section className={styles.section}>
            <p className={styles.title}>{title}</p>
            {children}
        </section>
    );
}
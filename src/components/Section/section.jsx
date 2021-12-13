import s from './section.module.css';

export default function Section({ title, children }) {
    return (
        <section className={s.section}>
            <p className={s.title}>{title}</p>
            {children}
        </section>
    );
}
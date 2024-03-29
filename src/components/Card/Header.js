import styles from './Card.module.css';

const Header = ({ title, newTitle, readonly, isEdit, onEdit, children }) => {
    const handleChange = event => onEdit(event.target.value);

    const staticHeader = (
        <div className={styles.header}>
            <span className={styles.title}>{title}</span>
        </div>
    );

    const dynamicHeader = isEdit ? (
        <div className={styles.header}>
            <input className={styles.input} value={newTitle} onChange={handleChange} />
            {children}
        </div>
    ) : (
        <div className={styles.header}>
            <span className={styles.title}>{title}</span>
            {children}
        </div>
    );

    return readonly ? staticHeader : dynamicHeader;
};

export default Header;

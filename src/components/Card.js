import styles from './Card.module.css';
import Divider from './Divider';

const Card = ({ title, children }) => (
    <div className={styles.card}>
        <div className={styles.header}>{title}</div>
        <Divider />
        <div className={styles.content}>{children}</div>
    </div>
);

export default Card;

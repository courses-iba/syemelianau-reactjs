import { useContext } from 'react';

import styles from './Header.module.css';
import { Context } from '../context';

const Header = ({ title }) => {
    const { cards } = useContext(Context);

    return (
        <header className={styles.header}>
            <span className={styles.title}>{title}</span>
            <div className={styles.badge}>{cards.length}</div>
        </header>
    );
};

export default Header;

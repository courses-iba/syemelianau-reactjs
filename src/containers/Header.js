import { useSelector } from 'react-redux';

import styles from './Header.module.css';

const Header = ({ title }) => {
    const { cards } = useSelector(state => state.cardReducer);
    const { email, role } = useSelector(state => state.userReducer);

    return (
        <header className={styles.header}>
            <span className={styles.title}>
                {(email && `Hello, ${role === 'admin' ? 'Admin' : email}!`) || title}
            </span>
            <div className={styles.badge}>{cards.length}</div>
        </header>
    );
};

export default Header;

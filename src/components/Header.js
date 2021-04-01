import styles from './Header.module.css';

const Header = ({ title }) => (
    <header className={styles.header}>{title}</header>
);

export default Header;

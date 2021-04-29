import { menu } from './Menu.module.css';

const Menu = ({ children }) => (
    <nav className={menu}>{children}</nav>
);

export default Menu;

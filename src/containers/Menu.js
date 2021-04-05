import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdAdd, MdDelete } from 'react-icons/md';

import styles from './Menu.module.css';
import { iButton } from '../styles/Button.module.css';
import { Context } from '../context';
import Checkbox from '../components/Checkbox';

const Menu = () => {
    const iProps = { color: '#1675e0' };
    const routes = [
        { link: '/', title: 'Home' },
        { link: '/login', title: 'Login' },
    ];

    const { pathname } = useLocation();
    const {
        readonly,
        handleAdd,
        handleDelete,
        handleReadonly
    } = useContext(Context);
    const [active, setActive] = useState(routes.findIndex(({ link }) => link === pathname));

    return (
        <nav className={styles.nav}>
            <div style={{ display: 'flex' }}>
                <Checkbox name="Readonly" checked={readonly} onChange={handleReadonly} />
                <button className={iButton} onClick={handleAdd} children={<MdAdd {...iProps} />} />
                <button className={iButton} onClick={handleDelete} children={<MdDelete {...iProps} />} />
            </div>
            <div className={styles.menu}>
                {routes.map(({ link, title }, index) => (
                    <Link
                        key={index}
                        className={index === active ? styles.active : null}
                        to={link}
                        children={title}
                        onClick={() => setActive(index)}
                    />
                ))}
            </div>
            <span />
        </nav>
    );
};

export default Menu;

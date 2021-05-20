import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { MdAdd, MdDelete } from 'react-icons/md';

import styles from './Menu.module.css';
import { iButton } from '../styles/Button.module.css';
import { createCard, deleteCards } from '../redux/actions/card';
import { updateReadonly } from '../redux/actions/page';
import Checkbox from '../components/Checkbox';

const Menu = () => {
    const iProps = { color: '#1675e0' };
    const routes = [
        { link: '/', title: 'Home' },
        { link: '/login', title: 'Login' },
    ];

    const { pathname } = useLocation();
    const { readonly } = useSelector(state => state.pageReducer);

    const dispatch = useDispatch();
    const handleAdd = () => dispatch(createCard());
    const handleDelete = () => dispatch(deleteCards());
    const handleReadonly = () => dispatch(updateReadonly(!readonly));

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

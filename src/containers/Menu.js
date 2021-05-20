import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { MdAdd, MdDelete } from 'react-icons/md';

import styles from './Menu.module.css';
import { iButton } from '../styles/Button.module.css';
import { createCard, deleteCards } from '../redux/actions/card';
import { updateReadonly } from '../redux/actions/page';
import Checkbox from '../components/Checkbox';
import { logout } from '../redux/reducers/user';

const Menu = () => {
    const iProps = { color: '#1675e0' };
    const routes = [
        { link: '/', title: 'Home' },
        { link: '/login', title: 'Login' },
    ];

    const { pathname } = useLocation();
    const { readonly } = useSelector(state => state.pageReducer);
    const { role } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    const handleAdd = () => dispatch(createCard());
    const handleDelete = () => dispatch(deleteCards());
    const handleReadonly = () => dispatch(updateReadonly(!readonly));

    return (
        <nav className={styles.nav}>
            {role && (!readonly || role === 'admin') && (
                <div className={styles.panel}>
                    {role === 'admin' && <Checkbox name="Readonly" checked={readonly} onChange={handleReadonly} />}
                    {(!readonly || role === 'admin') && (
                        <div className={styles.panel}>
                            <button className={iButton} onClick={handleAdd} children={<MdAdd {...iProps} />} />
                            <button className={iButton} onClick={handleDelete} children={<MdDelete {...iProps} />} />
                        </div>
                    )}
                </div>
            )}
            <div className={styles.menu}>
                {routes.map(({ link, title }) => {
                    const login = role && link === '/login';

                    return (
                        <Link
                            key={link}
                            className={link === pathname ? styles.active : null}
                            to={link}
                            children={login ? 'Logout' : title}
                            onClick={() => login && dispatch(logout())}
                        />
                    );
                })}
            </div>
        </nav>
    );
};

export default Menu;

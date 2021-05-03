import { useContext } from 'react';
import { MdAdd, MdDelete } from 'react-icons/md';

import { menu } from './Menu.module.css';
import { iButton } from '../styles/Button.module.css';
import { Context } from '../context';
import Checkbox from '../components/Checkbox';

const Menu = () => {
    const iProps = { color: '#1675e0' };

    const {
        readonly,
        handleAdd,
        handleDelete,
        handleReadonly
    } = useContext(Context);

    return (
        <nav className={menu}>
            <Checkbox name="Readonly" checked={readonly} onChange={handleReadonly} />
            <button className={iButton} onClick={handleAdd} children={<MdAdd {...iProps} />} />
            <button className={iButton} onClick={handleDelete} children={<MdDelete {...iProps} />} />
        </nav>
    );
};

export default Menu;

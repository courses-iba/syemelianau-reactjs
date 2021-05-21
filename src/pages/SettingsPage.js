import { useDispatch, useSelector } from 'react-redux';

import styles from './SettingsPage.module.css';
import Checkbox from '../components/Checkbox';
import { updateReadonly } from '../redux/actions/page';

const SettingsPage = () => {
    const { readonly } = useSelector(state => state.pageReducer);

    const dispatch = useDispatch();
    const handleReadonly = () => dispatch(updateReadonly(!readonly));

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <Checkbox name="Readonly" checked={readonly} onChange={handleReadonly} />
            </div>
        </div>
    );
};

export default SettingsPage;

import { useState, useEffect } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import classNames from 'classnames';

import styles from './Card.module.css';

const cardLoad = Component => {
    return props => {
        const loader = { color: '#36d7b7', css: { padding: '3vh' } };

        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, Math.floor(Math.random() * 3000));
        }, []);

        const component = <Component {...props} />;
        const load = (
            <div className={classNames(styles.card, styles.load)}>
                <SyncLoader {...loader} />
            </div>
        );

        return loading ? load : component;
    };
};

export default cardLoad;

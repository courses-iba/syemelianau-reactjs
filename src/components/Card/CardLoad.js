import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';
import classNames from 'classnames';

import styles from './Card.module.css';

const cardLoad = Component => {
    return props => {
        const { loader } = useSelector(state => state.pageReducer);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setLoading(false);
            }, Math.floor(Math.random() * 1000));

            return () => clearTimeout(timeout);
        });

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

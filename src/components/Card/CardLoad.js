import { useState, useEffect, useContext } from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import classNames from 'classnames';

import styles from './Card.module.css';
import { Context } from '../../context';

const cardLoad = Component => {
    return props => {
        const { loader } = useContext(Context);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setLoading(false);
            }, Math.floor(Math.random() * 3000));

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
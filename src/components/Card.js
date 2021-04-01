import { useState } from 'react';

import styles from './Card.module.css';
import Divider from './Divider';

const Card = ({ title, children }) => {
    const [color, setColor] = useState(undefined);

    const randomColor = () => Math.floor(Math.random() * 5) + 1;
    const toggleColor = () => setColor(color ? undefined : randomColor());

    return (
        <div className={[styles.card, styles[`card${color}`]].join(' ')} onClick={toggleColor}>
            <div className={styles.header}>{title}</div>
            <Divider />
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export default Card;

import { useState } from 'react';

import styles from './Card.module.css';

const Body = ({ description, newDescription, readonly, isEdit, onEdit }) => {
    const calcHeight = () => {
        const min = 2;
        const max = newDescription.length / 20;
        return max < min ? min : max;
    };

    const [height, setHeight] = useState(calcHeight());

    const changeContent = event => {
        onEdit(event.target.value);
        setHeight(calcHeight());
    };

    const dynamicBody = isEdit ? (
        <textarea
            style={{ height: `${height}em` }}
            className={styles.input}
            value={newDescription}
            onChange={changeContent}
        />
    ) : description;

    return <div className={styles.body}>{readonly ? description : dynamicBody}</div>;
};

export default Body;

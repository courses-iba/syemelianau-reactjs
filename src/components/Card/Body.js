import { useState } from 'react';

import styles from './Card.module.css';
import { calcHeight } from '../../utils';

const Body = ({ description, newDescription, readonly, isEdit, onEdit }) => {
    const [height, setHeight] = useState(calcHeight(newDescription?.length));

    const handleChange = event => {
        onEdit(event.target.value);
        setHeight(calcHeight(event.target.value.length));
    };

    const dynamicBody = isEdit ? (
        <textarea
            style={{ height: `${height}em` }}
            className={styles.input}
            value={newDescription}
            onChange={handleChange}
        />
    ) : description;

    return <div className={styles.body}>{readonly ? description : dynamicBody}</div>;
};

export default Body;

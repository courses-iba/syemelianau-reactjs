import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { MdClose, MdEdit, MdCheck } from 'react-icons/md';

import styles from './Card.module.css';
import Divider from './Divider';

const Card = ({ content, readonly, onEdit }) => {
    const iconProps = { color: '#586069', size: 24 };
    const randomColor = () => Math.floor(Math.random() * 5) + 1;
    const calcHeight = () => {
        const min = 2;
        const max = newContent.description.length / 20;
        return max < min ? min : max;
    };

    const [checked, setChecked] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [newContent, setNewContent] = useState(content);
    const [height, setHeight] = useState(calcHeight());

    const toggleChecked = () => setChecked(isEdit || checked ? null : randomColor());
    const toggleEdit = e => {
        e?.stopPropagation();
        setChecked(null);
        setIsEdit(!isEdit);
        setNewContent(content);
    };
    const changeTitle = event => setNewContent({ ...newContent, title: event.target.value });
    const changeContent = event => {
        setNewContent({ ...newContent, description: event.target.value });
        setHeight(calcHeight());
    };
    const editCard = e => {
        e?.stopPropagation();
        onEdit(newContent);
        toggleEdit();
    };

    useEffect(() => {
        readonly && setIsEdit(false);
    }, [readonly]);

    const staticCard = (
        <div>
            <div className={styles.header}>
                <span className={styles.title}>{content.title}</span>
            </div>
            <Divider />
            <div className={styles.body}>{content.description}</div>
        </div>
    );

    const actionCard = isEdit ? (
        <div>
            <div className={styles.header}>
                <input className={styles.input} value={newContent.title} onChange={changeTitle} />
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={editCard} children={<MdCheck {...iconProps} />} />
                    <button className={styles.button} onClick={toggleEdit} children={<MdClose {...iconProps} />} />
                </div>
            </div>
            <Divider />
            <div className={styles.body}>
                <textarea
                    style={{ height: `${height}em` }}
                    className={styles.input}
                    value={newContent.description}
                    onChange={changeContent}
                />
            </div>
        </div>
    ) : (
        <div>
            <div className={styles.header}>
                <span className={styles.title}>{content.title}</span>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={toggleEdit} children={<MdEdit {...iconProps} />} />
                </div>
            </div>
            <Divider />
            <div className={styles.body}>{content.description}</div>
        </div>
    );

    return (
        <div className={classNames(styles.card, styles[`card${checked}`])} onClick={toggleChecked}>
            {readonly ? staticCard : actionCard}
        </div>
    );
};

export default Card;

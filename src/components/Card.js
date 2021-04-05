import { useState } from 'react';
import { MdClose, MdEdit, MdCheck } from 'react-icons/md';

import styles from './Card.module.css';
import Divider from './Divider';

const Card = ({ title, children, edit }) => {
    const iconProps = { color: '#586069', size: 24 };
    const randomColor = () => Math.floor(Math.random() * 5) + 1;
    const calcHeight = () => {
        const min = 2;
        const max = card.content.length / 20;
        return max < min ? min : max;
    };

    const [checked, setChecked] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [card, setCard] = useState({ title, content: children });
    const [height, setHeight] = useState(calcHeight());

    const toggleChecked = () => setChecked(isEdit || checked ? null : randomColor());
    const toggleEdit = e => {
        e?.stopPropagation();
        setChecked(null);
        setIsEdit(!isEdit);
        setCard({ title, content: children });
    };
    const changeTitle = event => setCard({ ...card, title: event.target.value });
    const changeContent = event => {
        setCard({ ...card, content: event.target.value });
        setHeight(calcHeight());
    };
    const editCard = e => {
        e?.stopPropagation();
        edit(card);
        toggleEdit();
    };

    return (
        <div className={[styles.card, styles[`card${checked}`]].join(' ')} onClick={toggleChecked}>
            <div className={styles.header}>
                {isEdit ? (
                    <input
                        className={styles.input}
                        value={card.title}
                        onChange={changeTitle}
                    />
                ) : <span className={styles.title}>{title}</span>}
                <div className={styles.buttons}>
                    {isEdit && (
                        <button
                            className={styles.button}
                            onClick={editCard}
                            children={<MdCheck {...iconProps} />}
                        />
                    )}
                    <button
                        className={styles.button}
                        onClick={toggleEdit}
                        children={isEdit ? <MdClose {...iconProps} /> : <MdEdit {...iconProps} />}
                    />
                </div>
            </div>
            <Divider />
            <div className={styles.content}>
                {isEdit ? (
                    <textarea
                        style={{ height: `${height}em` }}
                        className={styles.input}
                        value={card.content}
                        onChange={changeContent}
                    />
                ) : children}
            </div>
        </div>
    );
};

export default Card;

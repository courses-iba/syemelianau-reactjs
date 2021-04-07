import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { MdClose, MdEdit, MdCheck } from 'react-icons/md';

import styles from './Card.module.css';
import Divider from './Divider';

const Card = ({ content, readonly, edit }) => {
    const { title, description } = content;
    const iconProps = { color: '#586069', size: 24 };
    const randomColor = () => Math.floor(Math.random() * 5) + 1;
    const calcHeight = () => {
        const min = 2;
        const max = card.description.length / 20;
        return max < min ? min : max;
    };

    const [checked, setChecked] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [card, setCard] = useState(content);
    const [height, setHeight] = useState(calcHeight());

    const toggleChecked = () => setChecked(isEdit || checked ? null : randomColor());
    const toggleEdit = e => {
        e?.stopPropagation();
        setChecked(null);
        setIsEdit(!isEdit);
        setCard(content);
    };
    const changeTitle = event => setCard({ ...card, title: event.target.value });
    const changeContent = event => {
        setCard({ ...card, description: event.target.value });
        setHeight(calcHeight());
    };
    const editCard = e => {
        e?.stopPropagation();
        edit(card);
        toggleEdit();
    };

    useEffect(() => {
        readonly && setIsEdit(false);
    }, [readonly]);

    const staticCard = (
        <div>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
            </div>
            <Divider />
            <div className={styles.content}>{description}</div>
        </div>
    );

    const actionCard = (
        <div>
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
                        value={card.description}
                        onChange={changeContent}
                    />
                ) : description}
            </div>
        </div>
    );

    return (
        <div className={classNames(styles.card, styles[`card${checked}`])} onClick={toggleChecked}>
            {readonly ? staticCard : actionCard}
        </div>
    );
};

export default Card;

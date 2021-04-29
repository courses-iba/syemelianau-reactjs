import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { MdClose, MdEdit, MdCheck } from 'react-icons/md';

import styles from './Card.module.css';
import { iButton } from '../../styles/Button.module.css';
import Divider from '../Divider';
import Header from './Header';
import Body from './Body';

const Card = ({ content, checked, readonly, onEdit, onCheck }) => {
    const randomState = () => Math.floor(Math.random() * 5) + 1;

    const [isEdit, setIsEdit] = useState(false);
    const [newContent, setNewContent] = useState(content);

    const toggleChecked = () => onCheck(isEdit || checked ? null : randomState());
    const toggleEdit = e => {
        e?.stopPropagation();
        checked && onCheck(null);
        setIsEdit(!isEdit);
        setNewContent(content);
    };
    const editCard = e => {
        e?.stopPropagation();
        onEdit(newContent);
        toggleEdit();
    };

    useEffect(() => {
        readonly && setIsEdit(false);
    }, [readonly]);

    return (
        <div className={classNames(styles.card, styles[`card${checked}`])} onClick={toggleChecked}>
            <Header
                title={content.title}
                newTitle={newContent.title}
                readonly={readonly}
                isEdit={isEdit}
                onEdit={title => setNewContent({ ...newContent, title })}
            >
                {isEdit ? (
                    <div className={styles.buttons}>
                        <button className={iButton} onClick={editCard} children={<MdCheck />} />
                        <button className={iButton} onClick={toggleEdit} children={<MdClose />} />
                    </div>
                ) : (
                    <div className={styles.buttons}>
                        <button className={iButton} onClick={toggleEdit} children={<MdEdit />} />
                    </div>
                )}
            </Header>
            <Divider />
            <Body
                description={content.description}
                newDescription={newContent.description}
                readonly={readonly}
                isEdit={isEdit}
                onEdit={description => setNewContent({ ...newContent, description })}
            />
        </div>
    );
};

export default Card;

import { useContext, useEffect, useState } from 'react';
import { MdClose, MdEdit, MdCheck } from 'react-icons/md';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Card.module.css';
import { iButton } from '../../styles/Button.module.css';
import Divider from '../Divider';
import Header from './Header';
import Body from './Body';
import cardLoad from './CardLoad';
import { Context } from '../../context';
import { randomState } from '../../utils';

const Card = props => {
    const { content, checked } = props;
    const { readonly, handleEdit } = useContext(Context);

    const [isEdit, setIsEdit] = useState(checked);
    const [newContent, setNewContent] = useState(content);

    const toggleChecked = () => {
        if (!(isEdit && checked)) {
            handleEdit({ ...props, checked: isEdit || checked ? null : randomState() });
        }
    };
    const toggleEdit = e => {
        e?.stopPropagation();
        handleEdit({ ...props, content: newContent, checked: null });
        setNewContent(content);
        setIsEdit(!isEdit);
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
                        <button className={iButton} onClick={toggleEdit} children={<MdCheck />} />
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

Card.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    checked: PropTypes.number
};

export default cardLoad(Card);

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdEdit, MdCheck } from 'react-icons/md';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Card.module.css';
import { iButton } from '../../styles/Button.module.css';
import Divider from '../Divider';
import Header from './Header';
import Body from './Body';
import cardLoad from './CardLoad';
import { updateCard } from '../../redux/actions/card';
import { randomState } from '../../utils';

const Card = props => {
    const { id, content, checked } = props;
    const { readonly } = useSelector(state => state.pageReducer);

    const history = useHistory();
    const dispatch = useDispatch();
    const setCard = card => dispatch(updateCard(card));

    const [isEdit, setIsEdit] = useState(checked);
    const [newContent, setNewContent] = useState(content);

    const handleChecked = () => {
        if (!(isEdit && checked)) {
            setCard({ ...props, checked: isEdit || checked ? null : randomState() });
        }
    };
    const handleEdit = e => {
        e?.stopPropagation();
        setCard({ ...props, content: newContent, checked: null });
        setNewContent(content);
        setIsEdit(!isEdit);
    };
    const handleOpen = () => {
        !isEdit && history.push(`/card/${id}`);
    };

    useEffect(() => {
        readonly && setIsEdit(false);
    }, [readonly]);

    return (
        <div
            className={classNames(styles.card, styles[`card${checked}`])}
            onClick={handleChecked}
            onDoubleClick={handleOpen}
        >
            <Header
                title={content.title}
                newTitle={newContent.title}
                readonly={readonly}
                isEdit={isEdit}
                onEdit={title => setNewContent({ ...newContent, title })}
            >
                {isEdit ? (
                    <div className={styles.buttons}>
                        <button className={iButton} onClick={handleEdit} children={<MdCheck />} />
                        <button className={iButton} onClick={handleEdit} children={<MdClose />} />
                    </div>
                ) : (
                    <div className={styles.buttons}>
                        <button className={iButton} onClick={handleEdit} children={<MdEdit />} />
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

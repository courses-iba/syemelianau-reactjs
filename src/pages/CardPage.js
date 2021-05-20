import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HashLoader from 'react-spinners/HashLoader';

import styles from './CardPage.module.css';
import Card from '../components/Card';

const CardPage = () => {
    const { cards } = useSelector(state => state.cardReducer);
    const { loader } = useSelector(state => state.pageReducer);
    const { id } = useParams();
    const history = useHistory();
    const [card, setCard] = useState();

    useEffect(() => {
        const card = cards.find(card => card.id === id);
        card || history.push('/not-found');
        setCard(card);
    }, [cards, id, history]);

    return (
        <div className={styles.page}>
            {card ? <Card {...card} /> : <HashLoader {...loader} />}
        </div>
    );
};

export default CardPage;

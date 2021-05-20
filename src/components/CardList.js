import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridLoader from 'react-spinners/GridLoader';

import { list, empty } from './CardList.module.css';
import { getCards } from '../redux/actions/card';
import Card from './Card';

const CardList = ({ placeholder }) => {
    const { cards, loading } = useSelector(state => state.cardReducer);
    const { loader } = useSelector(state => state.pageReducer);

    const dispatch = useDispatch();

    const load = <GridLoader {...loader} />;
    const content = cards.length
        ? cards.map(card => <Card key={card.id} {...card} />)
        : <span className={empty}>{placeholder}</span>;

    useEffect(() => {
        cards.length || dispatch(getCards());
    }, [cards.length, dispatch]);

    return (
        <div className={list}>
            {loading ? load : content}
        </div>
    );
};

export default CardList;

import { useContext } from 'react';
import GridLoader from 'react-spinners/GridLoader';

import { list, empty } from './CardList.module.css';
import { Context } from '../context';
import Card from './Card';

const CardList = ({ placeholder }) => {
    const { cards, loading, loader } = useContext(Context);

    return (
        <div className={list}>
            {loading
                ? <GridLoader {...loader} />
                : cards.length
                    ? cards.map(card => <Card key={card.id} {...card} />)
                    : <span className={empty}>{placeholder}</span>
            }
        </div>
    );
};

export default CardList;

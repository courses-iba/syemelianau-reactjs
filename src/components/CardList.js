import { useContext } from 'react';

import { list, empty } from './CardList.module.css';
import { Context } from '../context';
import Card from './Card';

const CardList = ({ placeholder }) => {
    const { cards } = useContext(Context);

    return (
        <div className={list}>
            {cards.length
                ? cards.map(card => <Card key={card.id} {...card} />)
                : <span className={empty}>{placeholder}</span>
            }
        </div>
    );
};

export default CardList;

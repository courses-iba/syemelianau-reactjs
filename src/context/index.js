import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { randomState } from '../utils';

const Context = createContext({});

const Provider = ({ children }) => {
    const [readonly, setReadonly] = useState(false);
    const [cards, setCards] = useState([...Array(18).keys()].map(value => ({
        id: uuid(),
        content: {
            title: `Card Title ${value}`,
            description: `
                ${value}.
                Some quick example text
                to build on the card title
                and make up the bulk of the card's content.
            `.replace(/\s+/g, ' ').trim()
        },
        checked: null
    })));

    const handleReadonly = () => setReadonly(!readonly);
    const handleEdit = newCard => setCards(cards.map(card => card.id === newCard.id ? newCard : card));
    const handleDelete = () => setCards(cards.filter(({ checked }) => !checked));
    const handleAdd = () => setCards([...cards, {
        id: uuid(),
        content: {
            title: 'Edit me!',
            description: 'Me too :)'
        },
        checked: randomState()
    }]);

    return (
        <Context.Provider value={{
            cards,
            readonly,
            handleAdd,
            handleDelete,
            handleEdit,
            handleReadonly
        }}>
            {children}
        </Context.Provider>
    );
};

export { Context };

export default Provider;

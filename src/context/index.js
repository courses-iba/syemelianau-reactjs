import { createContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { getPokemons } from '../services/pokemons.service';
import { randomState } from '../utils';

const Context = createContext({});

const Provider = ({ children }) => {
    const loader = { color: '#36d7b7', css: { padding: '3vh' } };

    const [readonly, setReadonly] = useState(false);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        getPokemons().then(response => {
            setCards(response.data.slice(0, 15).map(pokemon => ({
                id: pokemon.Number,
                content: {
                    title: pokemon.Name,
                    description: pokemon.About
                },
                checked: null
            })));
            setLoading(false);
        });
    }, []);

    return (
        <Context.Provider value={{
            cards,
            readonly,
            loading,
            loader,
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

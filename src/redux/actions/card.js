import { v4 as uuid } from 'uuid';

import { CARD_ACTIONS } from '../actions';
import { randomState } from '../../utils';
import { getPokemons } from '../../services/pokemons.service';

const getCards = () => {
    return dispatch => {
        dispatch(getCardsStart());
        return getPokemons()
            .then(response => {
                dispatch(getCardsSuccess(response.data.slice(0, 15).map(pokemon => ({
                    id: pokemon['Number'],
                    content: {
                        title: pokemon['Name'],
                        description: pokemon['About']
                    },
                    checked: null
                }))));
            })
            .catch(error => dispatch(getCardsError(error)));
    };
};

const getCardsStart = () => ({
    type: CARD_ACTIONS.GET_CARDS_START
});

const getCardsSuccess = cards => ({
    type: CARD_ACTIONS.GET_CARDS_SUCCESS,
    payload: cards
});

const getCardsError = error => ({
    type: CARD_ACTIONS.GET_CARDS_FAILURE,
    payload: error
});

const createCard = () => {
    return dispatch => dispatch(createCardSuccess({
        id: uuid(),
        content: {
            title: 'Edit me!',
            description: 'Me too :)'
        },
        checked: randomState()
    }));
};

const createCardSuccess = card => ({
    type: CARD_ACTIONS.CREATE_CARD,
    payload: card
});

const updateCard = card => {
    return dispatch => dispatch(updateCardSuccess(card));
};

const updateCardSuccess = card => ({
    type: CARD_ACTIONS.UPDATE_CARD,
    payload: card
});

const deleteCards = () => {
    return dispatch => dispatch(deleteCardsSuccess());
};

const deleteCardsSuccess = () => ({
    type: CARD_ACTIONS.DELETE_CARDS
});

export {
    getCards,
    createCard,
    updateCard,
    deleteCards
};

import { CARD_ACTIONS } from '../actions';

const initialState = {
    cards: [],
    loading: false,
    error: null
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARD_ACTIONS.GET_CARDS_START: {
            return {
                ...state,
                loading: true
            };
        }
        case CARD_ACTIONS.GET_CARDS_SUCCESS: {
            return {
                ...state,
                loading: false,
                cards: action.payload
            };
        }
        case CARD_ACTIONS.GET_CARDS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }
        case CARD_ACTIONS.CREATE_CARD: {
            return {
                ...state,
                cards: [...state.cards, action.payload]
            };
        }
        case CARD_ACTIONS.UPDATE_CARD: {
            return {
                ...state,
                cards: state.cards.map(card => card.id === action.payload.id ? action.payload : card)
            };
        }
        case CARD_ACTIONS.DELETE_CARDS: {
            return {
                ...state,
                cards: state.cards.filter(({ checked }) => !checked)
            };
        }
        default: {
            return state;
        }
    }
};

export default cardReducer;

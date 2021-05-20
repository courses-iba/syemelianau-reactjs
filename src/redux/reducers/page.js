import { PAGE_ACTIONS } from '../actions';

const initialState = {
    readonly: false,
    loader: { color: '#36d7b7', css: { padding: '3vh' } }
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PAGE_ACTIONS.UPDATE_READONLY: {
            return {
                ...state,
                readonly: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

export default pageReducer;

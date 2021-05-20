import { PAGE_ACTIONS } from '../actions';

const updateReadonly = readonly => {
    return dispatch => dispatch(updateReadonlySuccess(readonly));
};

const updateReadonlySuccess = readonly => ({
    type: PAGE_ACTIONS.UPDATE_READONLY,
    payload: readonly
});

export {
    updateReadonly
};

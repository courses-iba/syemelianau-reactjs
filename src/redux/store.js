import storage from 'redux-persist/lib/storage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import cardReducer from './reducers/card';
import pageReducer from './reducers/page';

const persistConfig = {
    rootReducer: {
        key: 'rootReducer',
        storage,
        blacklist: ['cardReducer', 'pageReducer']
    },
    cardReducer: {
        key: 'cardReducer',
        storage,
        whitelist: ['cards']
    },
    pageReducer: {
        key: 'pageReducer',
        storage,
        whitelist: ['readonly']
    }
};

const rootReducer = combineReducers({
    cardReducer: persistReducer(persistConfig.cardReducer, cardReducer),
    pageReducer: persistReducer(persistConfig.pageReducer, pageReducer)
});

const persistedReducer = persistReducer(persistConfig.rootReducer, rootReducer);
const initialState = {};
const middleware = applyMiddleware(thunk);

const store = createStore(persistedReducer, initialState, middleware);
const persistor = persistStore(store);

export { store, persistor };

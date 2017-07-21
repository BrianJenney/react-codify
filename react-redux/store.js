
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}

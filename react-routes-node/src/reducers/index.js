

import loggedIn from './userReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    loggedIn
});
export default rootReducer;
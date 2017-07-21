//bunlde up our reducers

import { combineReducers } from 'redux';


import addToList from './addToList';
import votes from './votes';

const rootReducer = combineReducers({addToList, votes});

export default rootReducer;

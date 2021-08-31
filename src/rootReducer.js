import { combineReducers } from 'redux';
import counterReducer from './CounterComponent/reducer'

const rootReducer = combineReducers({
    countChange : counterReducer
});

export default rootReducer;
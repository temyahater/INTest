import {combineReducers} from 'redux';
import phones from './phonesReducer';
import stack from './stackReducer';

export default combineReducers({
    phones, stack
});
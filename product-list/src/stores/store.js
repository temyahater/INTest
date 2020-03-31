import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers';

export default()=>{
    const store = createStore(reducer, applyMiddleware(logger));
    return store;
}


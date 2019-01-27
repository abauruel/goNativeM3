import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const Middleware = [];
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...Middleware));

export default store;

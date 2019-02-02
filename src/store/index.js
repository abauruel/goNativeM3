import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const Middleware = [sagaMiddleware];
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...Middleware));

sagaMiddleware.run(sagas);

export default store;

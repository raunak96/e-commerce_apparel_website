/* eslint-disable eqeqeq */
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];   // include redux-saga middleware

if(process.env.NODE_ENV =="development")
    middlewares.push(logger);

const store = createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

const persistedStore = persistStore(store);   //now we will be able to cache store data, we also have to make persist reducer in root-reducer 

export  {store,persistedStore};
/* eslint-disable eqeqeq */
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import thunk from "redux-thunk";

const middlewares = [thunk];   // include redux-thunk middleware

if(process.env.NODE_ENV =="development")
    middlewares.push(logger);

const store = createStore(rootReducer,applyMiddleware(...middlewares));
const persistedStore = persistStore(store);   //now we will be able to cache store data, we also have to make persist reducer in root-reducer 

export  {store,persistedStore};
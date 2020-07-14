import {all,call} from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';


export default function* rootSaga(){
    yield all([call(fetchCollectionsStart)]); // all tells saga middleware to run the sagas in the array in 'parallel' 
}
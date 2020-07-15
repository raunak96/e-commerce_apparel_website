import {all,call} from 'redux-saga/effects';
import { onFetchCollectionsStart } from './shop/shop.sagas';
import UserSagas from './user/user.sagas';


export default function* rootSaga(){
    yield all([call(onFetchCollectionsStart),call(UserSagas)]); // all tells saga middleware to run the sagas in the array in 'parallel' 
}
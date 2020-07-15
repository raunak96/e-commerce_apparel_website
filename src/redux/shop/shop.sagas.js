import {call,put,takeLatest} from 'redux-saga/effects';  // listens to every action of the type mentioned in its param
import ShopActionTypes from "./shop.types";
import {getShopData,firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure,fetchCollectionsSuccess} from "./shop.actions";

function* fetchCollectionsAsync(){

    const collectionRef= firestore.collection('collections'); // get Collection reference of our collection called 'collections'        
        try {
            const collectionSnapshot= yield collectionRef.get();  // note below

            // call used to call functions in saga..1st param fn name, 2nd onwards params of called function..Using call allows us to use yield
            const shopData =  yield call(getShopData,collectionSnapshot); 
            yield put(fetchCollectionsSuccess(shopData));   // put is sagas dispatch function
        } catch (error) {
            yield put(fetchCollectionsFailure(error.message));
        }
}
// yield basically allows saga-middleware to temporarily stop after said fn performed, and maybe cancel execution or do something else i.e middleware takes control

export function* onFetchCollectionsStart(){
/*
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)   

    takeEvery- listens to every action of Type FETCH_COLLECTIONS_START and then run the function fetchCollectionsAsync..Each time this action is dispatched,
    due to 'takeEvery', saga fetchCollectionsStart intercepts it and then runs fetchCollectionsAsync..It is also non-blocking i.e If for previous action, 
    result is still not yield, the other listeners for this actions do not have to wait for this previous one to finish, they run independently.
*/
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);

    // TakeLatest-if above action fired multiple times and previous ones still not finished, then cancel all previous ones and take only the latest action
    // In our case this is perfect as we want most up-to-date data 
}
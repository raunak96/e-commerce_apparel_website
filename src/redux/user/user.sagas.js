import {call,takeLatest,put,all} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {googleProvider, auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import { signInSuccess,signInFailure } from './user.actions';

function* getUserSnapShotFromUserAuth(user){
    try {
        const userRef= yield call(createUserProfileDocument,user);
        const userSnapshot= yield userRef.get();
        yield put(signInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

export function* signInWithGoogle(){
    try {
        const {user}= yield auth.signInWithPopup(googleProvider);  // this user key of object returned is the User reference
        yield call(getUserSnapShotFromUserAuth,user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
    
}
export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function * signInWithEmail({payload:{email,password}}){   // below function catches action EMAIL_SIGN_IN_START which has email/password as payload, hence we destructure these properties to use them
    try {
        const {user}= yield auth.signInWithEmailAndPassword(email,password);
        yield call(getUserSnapShotFromUserAuth,user);

    } catch (error) {
        yield put(signInFailure(error.message));
    }
}
export function * onEamilSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

export default function* UserSagas(){
    yield all([call(onGoogleSignInStart),call(onEamilSignInStart)]);
}

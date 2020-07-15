import {call,takeLatest,put,all} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {googleProvider, auth, createUserProfileDocument, getUserinSession} from "../../firebase/firebase.utils";
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

// PERFORMS GOOGLE SIGN IN AS SOON AS GOOGLE_SIGN_IN_START action is dispatched which happens as soon as user clicks sign-in-with-Google button
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

// PERFORMS EMAIL SIGN IN AS SOON AS EMAIL_SIGN_IN_START action is dispatched which happens as soon as user clicks sign-in button
export function* signInWithEmail({payload:{email,password}}){   // below function catches action EMAIL_SIGN_IN_START which has email/password as payload, hence we destructure these properties to use them
    try {
        const {user}= yield auth.signInWithEmailAndPassword(email,password);
        yield call(getUserSnapShotFromUserAuth,user);

    } catch (error) {
        yield put(signInFailure(error.message));
    }
}
export function* onEamilSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

// CHECKS USER IN SESSION when action CHECK_USER_IN_SESSION is dispatched which happens as soon as APP component is mounted
export function* isUserInSession(){
    try {
        const userAuth=yield getUserinSession();
        if(!userAuth)
            return;
        yield call(getUserSnapShotFromUserAuth,userAuth);
    } catch (error) {
        yield put(signInFailure);
    }
}

export function* onCheckUserInSesion(){
    yield takeLatest(UserActionTypes.CHECK_USER_IN_SESSION,isUserInSession)
}

export default function* UserSagas(){
    yield all([call(onGoogleSignInStart),call(onEamilSignInStart),call(onCheckUserInSesion)]);
}

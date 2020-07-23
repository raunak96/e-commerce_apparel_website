import {takeLatest,all,call,put, select} from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart, setCartFromFirebase } from "./cart.actions";
import { getCartDocRef } from "../../firebase/firebase.utils";
import { CartActionTypes } from "./cart.types";
import {selectCurrentUser} from "../user/user.selectors";
import { selectCartItems } from "./cart.selectors";

function* clearCartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut);
}

function* checkCartFromFirebase({payload:user}){
    const cartRef= yield getCartDocRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignInSuccess(){
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS,checkCartFromFirebase);
}

function* updateCartInFirebase(){
    const currentUser= yield select(selectCurrentUser);  // select is used to get a particular selector from state in this case CurrentUserSelector

    if(currentUser){
        try {
            const cartRef= yield getCartDocRef(currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({cartItems});
        } catch (error) {
            console.log(error,"Could not update cart items in db");
        }
        
    }    
}
export function* onCartUpdate(){
    yield takeLatest([CartActionTypes.ADD_ITEM,CartActionTypes.REMOVE_ITEM,CartActionTypes.CLEAR_ITEM,CartActionTypes.CHECKOUT_SUCCESS]
        ,updateCartInFirebase);
}


export default function* CartSagas(){
    yield all([call(onSignOutSuccess),call(onCartUpdate),call(onSignInSuccess)]);
} 
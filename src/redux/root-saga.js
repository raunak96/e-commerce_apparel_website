import {all,call} from 'redux-saga/effects';
import ShopSagas from "./shop/shop.sagas";
import UserSagas from './user/user.sagas';
import CartSagas from './cart/cart.sagas';


export default function* rootSaga(){
    yield all([call(ShopSagas),call(UserSagas),call(CartSagas)]); // all tells saga middleware to run the sagas in the array in 'parallel' 
}
import { cartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = { cart_hidden: true, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART:
            return {
                ...state,
                cart_hidden: !state.cart_hidden,
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload )   //array of cartItems now is old array + items in payload
            };
        case cartActionTypes.CLEAR_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload )
            }
        default:
            return state;
    }
};

export default cartReducer;

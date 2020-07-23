import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = { cart_hidden: true, cartItems: [] };

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                cart_hidden: !state.cart_hidden,
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload )   //array of cartItems now is old array + items in payload
            };
        case CartActionTypes.CLEAR_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload )
            }
        case CartActionTypes.CLEAR_CART:
        case CartActionTypes.CHECKOUT_SUCCESS:
            return{
                ...state,
                cartItems:[]
            }
        case CartActionTypes.SET_CART_FROM_FIREBASE:
            return{
                ...state,
                cartItems: action.payload
            }
        default:
            return state;
    }
};

export default cartReducer;

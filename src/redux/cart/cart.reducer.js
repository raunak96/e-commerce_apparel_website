import { cartActionTypes } from "./cart.types";

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
                cartItems: [...state.cartItems, action.payload]   //array of cartItems now is old array + items in payload
            };
        default:
            return state;
    }
};

export default cartReducer;

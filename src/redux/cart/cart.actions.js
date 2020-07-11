import { cartActionTypes } from "./cart.types";

export const toggleCart = () => ({
    type: cartActionTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item,
});

export const clearCartItem = (item) => ({
    type: cartActionTypes.CLEAR_ITEM,
    payload: item,
});

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item,
});

export const clearCart=()=>({
    type: cartActionTypes.CLEAR_CART
});

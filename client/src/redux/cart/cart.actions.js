import { CartActionTypes } from "./cart.types";

export const toggleCart = () => ({
    type: CartActionTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const clearCartItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item,
});

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
});

export const clearCart=()=>({
    type: CartActionTypes.CLEAR_CART
});

export const setCartFromFirebase=(cartItems)=>({
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems
});
export const updateCartInFirebase=()=>({
    type: CartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const checkoutSuccess=()=>({
    type: CartActionTypes.CHECKOUT_SUCCESS
});
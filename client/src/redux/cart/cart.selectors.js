import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    selectCart,
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    selectCartItems,
    (cartItems)=>cartItems.reduce((resultTillNow,cartItem)=>resultTillNow+cartItem.quantity ,0)
);

export const selectCartHidden= createSelector(
    selectCart,
    cart=> cart.cart_hidden
);

export const selectCartTotalPrice= createSelector(
    selectCartItems,
    cartItems=> cartItems.reduce((totalTillNow,currentItem)=>totalTillNow+(currentItem.price*currentItem.quantity),0 )
);
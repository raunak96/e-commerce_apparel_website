import { cartActionTypes } from "./cart.types";

const INITIAL_STATE={cart_hidden: true};

const cartReducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case cartActionTypes.TOGGLE_CART:
            return {
                ...state,
                cart_hidden:!state.cart_hidden
            }
        default:
            return state;
    }

};

export default cartReducer;
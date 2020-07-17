import ShopActionTypes from "./shop.types";

const INITAL_STATE = {
    collections : null,
    isFetching : false,   // tells whether collection is being fetched from firestore
    errorMessage: undefined
};

const shopReducer = (state=INITAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:   //there is no need for this as redux-saga middleware is listening for this action..just as precaution it is written
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections:action.payload,
                isFetching: false,
                errorMessage: null
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage: action.payload 
            }
        default:
            return state;
    }
};

export default shopReducer;
import UserActionTypes from "./user.types";

const INITIAL_STATE = { currentUser: null, errors: null };


// IT WILL BASICALLY RETURN THE STATE OBJECT

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,                                   
                currentUser: action.payload,
                errors:null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
            return { ...state, errors: action.payload }
        default:
            return state;
    }
};

export default userReducer;
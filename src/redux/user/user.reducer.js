const INITIAL_STATE = { currentUser: null };


// IT WILL BASICALLY RETURN THE STATE OBJECT

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,                                   
                currentUser: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //this is similar to js localStorage

const persistConfig = {
    key: "root",              // we want to start storing everything from root-reducer onwards
    storage,                 // what storage to use to store the redux-store data
    whitelist: ["cart"],    // array of reducers we want to store...since User stored in firestore db no need of localStorage for it
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

export default persistReducer(persistConfig,rootReducer);   // this is modified root-reducer with persist config ensuring localStorage
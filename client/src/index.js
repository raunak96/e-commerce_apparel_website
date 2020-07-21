import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistedStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker";
//BrowserRouter wrapping App allows App to use react-router-dom's functions

// Provider allows entire app to used redux store and its functionalities

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistedStore}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.register();
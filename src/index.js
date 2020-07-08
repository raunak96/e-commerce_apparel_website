import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

//BrowserRouter wrapping App allows App to use react-router-dom's functions

// Provider allows entire app to used redux store and its functionalities

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>           
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

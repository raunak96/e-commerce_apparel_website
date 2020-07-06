import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//BrowserRouter wrapping App allows App to use react-router-dom's functions

ReactDOM.render(
    <React.StrictMode>   
        <BrowserRouter>  
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

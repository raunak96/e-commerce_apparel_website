import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);
function App() {
    return (
        <div>
            <Switch>
                <Route exact={true} path="/" component={Homepage}></Route>
                <Route exact={true} path="/hats" component={HatsPage}></Route>
            </Switch>
        </div>
    );
}

export default App;

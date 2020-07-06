import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";


function App() {
    return (
		<div>
			<Header/>
            <Switch>
                <Route exact={true} path="/" component={Homepage}></Route>
                <Route exact={true} path="/shop" component={ShopPage}></Route>
            </Switch>
        </div>
    );
}

export default App;

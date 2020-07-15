import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthPage from "./pages/authPage/authPage.component";
import checkoutPage from "./pages/checkoutPage/checkout.component";

import Header from "./components/header/header.component";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserInSession } from "./redux/user/user.actions";

class App extends React.Component {
    componentDidMount() {
        const {checkUserInSession}=this.props;
        checkUserInSession();
    }
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact={true} path="/signin" render={()=> this.props.currentUser ?(<Redirect to="/" />) :(<AuthPage/>)}></Route>
                    <Route exact={true} path="/" component={Homepage}></Route>
                    <Route path="/shop" component={ShopPage}></Route>
                    <Route exact={true} path="/checkout" component={checkoutPage}></Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps= createStructuredSelector({
    currentUser:  selectCurrentUser,              //to get currentUser form redux store/reducer after slicing from root reducer as prop called currentUser
});

const mapDispatchToProps= dispatch=>({
    checkUserInSession:()=>dispatch(checkUserInSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);   

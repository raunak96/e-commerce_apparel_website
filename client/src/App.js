import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {GlobalStyle} from "./global.styles";

import Header from "./components/header/header.component";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserInSession } from "./redux/user/user.actions";
import Spinner from "./components/spinner/spinner.component";

const HomePage= lazy(()=>import("./pages/homepage/homepage.component") );
const AuthPage= lazy(()=>import("./pages/authPage/authPage.component") );
const CheckoutPage= lazy(()=>import("./pages/checkoutPage/checkout.component") );
const ShopPage= lazy(()=>import("./pages/shop/shop.component") );

const App=({currentUser,checkUserInSession})=>  {

    useEffect(()=>{          // this runs everytime this Component renders
        checkUserInSession();
    },[checkUserInSession]);   // this 2nd param tells useEffect to run only when any element in this array changes.Since checkUserInSession is a function
    //obtained from mapDispatchToProps and never changes, useEffect runs only 1st time exactly like ComponentDidMount

    return (
        <div>
            <GlobalStyle />
            <Header/>
            <Switch>
                <Suspense fallback={<Spinner />}>
                    <Route exact={true} path="/signin" render={()=> currentUser ?(<Redirect to="/" />) :(<AuthPage/>)}></Route>
                    <Route exact={true} path="/" component={HomePage}></Route>
                    <Route path="/shop" component={ShopPage}></Route>
                    <Route exact={true} path="/checkout" component={CheckoutPage}></Route>
                </Suspense>
            </Switch>
        </div>
    );
}

const mapStateToProps= createStructuredSelector({
    currentUser:  selectCurrentUser,              //to get currentUser form redux store/reducer after slicing from root reducer as prop called currentUser
});

const mapDispatchToProps= dispatch=>({
    checkUserInSession:()=>dispatch(checkUserInSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);   

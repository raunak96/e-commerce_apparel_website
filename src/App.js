import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthPage from "./pages/authPage/authPage.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import {connect} from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
    
    unSubscribeFromAuth = null; //its a method which will keep connection with auth of google provider from firebase to check if user signs in/out

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            //this function is called whenever auth state changes (sign in/out) and state is set for current user
			
			if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot((userSnapshot) => {
                    this.props.setCurrentUser({
                            id: userSnapshot.id,
                            ...userSnapshot.data(),
                    });
                });
			} 
            else 
                this.props.setCurrentUser(userAuth); 
        });
    }
    componentWillUnmount() {
        this.unSubscribeFromAuth.unsubscribe(); //when component unmounts, no need to keep connection open to auth to fetch user state, hence unSubscribe
    }
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact={true} path="/signin" render={()=> this.props.currentUser ?(<Redirect to="/" />) :(<AuthPage/>)}></Route>
                    <Route exact={true} path="/" component={Homepage}></Route>
                    <Route exact={true} path="/shop" component={ShopPage}></Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps= ({user})=>({
    currentUser: user.currentUser     //to get currentUser form redux store/reducer as prop called currentUser
})

const mapDispatchToProps = dispatch=>({      // this basically makes a prop called setCurrentUser which in this case is a function which dipatches an action
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);   

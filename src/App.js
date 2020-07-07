import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthPage from "./pages/authPage/authPage.component"
import Header from "./components/header/header.component";
import {auth} from "./firebase/firebase.utils";


class App extends React.Component {
	constructor(props) {
		super (props);
		this.state={
			currentUser:null
		}
	}

	unSubscribeFromAuth=null;  //its a method which will keep connection with auth of google provider from firebase to check if user signs in/out

	componentDidMount() {
		this.unSubscribeFromAuth=auth.onAuthStateChanged(user=>{
			this.setState({ currentUser : user });
		})
	}
	componentWillUnmount() {
		this.unSubscribeFromAuth.unsubscribe();  //when component unmounts, no need to keep connection open to auth to fetch user state, hence unSubscribe
	}
	render(){
		return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact={true} path="/signin" component={AuthPage}></Route>
                    <Route exact={true} path="/" component={Homepage}></Route>
                    <Route exact={true} path="/shop" component={ShopPage}></Route>
                </Switch>
            </div>
        );
	}
    
}

export default App;

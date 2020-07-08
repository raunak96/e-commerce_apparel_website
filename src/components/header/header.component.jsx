import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import {auth} from "../../firebase/firebase.utils";
import {ReactComponent as Logo} from "../../assets/logo.svg"; //special syntax for importing svg img in React
import {connect} from "react-redux";

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
            <span className="logo-name">RAWN'S APPARELS</span>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
            {
            currentUser ? <Link to="/" className="option" onClick={e=>{e.preventDefault();auth.signOut()}}>SIGN OUT</Link> : <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state=>({    //this state is the root reducer
    currentUser : state.user.currentUser
});

export default connect(mapStateToProps)(Header);
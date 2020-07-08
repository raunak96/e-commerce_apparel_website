import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import {auth} from "../../firebase/firebase.utils";
import {ReactComponent as Logo} from "../../assets/logo.svg"; //special syntax for importing svg img in React

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

export default Header;
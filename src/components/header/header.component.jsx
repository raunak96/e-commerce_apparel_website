import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import {auth} from "../../firebase/firebase.utils";
import {ReactComponent as Logo} from "../../assets/logo.svg"; //special syntax for importing svg img in React
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import { selecCurrenttUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({currentUser,cart_hidden}) => (
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
            <CartIcon/>
        </div>
        {
            cart_hidden?null:<CartDropDown />
        }
    </div>
);

  //params - destructuring state to get currentUser option out of user in state, similarly for cart
const mapStateToProps = createStructuredSelector({    //this state is the root reducer
    currentUser : selecCurrenttUser,
    cart_hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);
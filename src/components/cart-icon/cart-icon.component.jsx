import React from 'react';
import "./cart-icon.styles.scss";
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from "../../assets/shoppingBag.svg";
import { toggleCart } from '../../redux/cart/cart.actions';

const CartIcon=({setCartVisibility})=>(
    <div className="cart-icon" onClick={setCartVisibility}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    setCartVisibility: () => dispatch(toggleCart()),
});

export default connect(null,mapDispatchToProps)(CartIcon);
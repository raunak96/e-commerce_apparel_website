import React from 'react';
import "./cart-icon.styles.scss";
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from "../../assets/shoppingBag.svg";
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon=({setCartVisibility,itemCount})=>(
    <div className="cart-icon" onClick={setCartVisibility}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = state=>({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    setCartVisibility: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
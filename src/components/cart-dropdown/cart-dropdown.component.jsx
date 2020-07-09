import React from 'react';
import "./card-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropDown = ({ cart_hidden }) => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);


export default CartDropDown;
import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import {toggleCart} from "../../redux/cart/cart.actions.js"

const CartDropDown = ({ cartItems, history, dispatch }) => (
    //instead of writing mapDispatchToProps to dispatch action, we can also dispatch action using dispatch prop which is passed by connect HOC in react-redux

    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className="empty-message">Your cart is Empty</span>
            )}
        </div>
        <CustomButton
            onClick={() => {
                history.push("/checkout");
                dispatch(toggleCart())
            }}>
            Go To Checkout
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

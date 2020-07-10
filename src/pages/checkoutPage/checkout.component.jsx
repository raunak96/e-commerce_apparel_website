import React from 'react';
import "./checkout.styles.scss";
import {createStructuredSelector} from "reselect";
import {selectCartItems,selectCartTotalPrice} from "../../redux/cart/cart.selectors"
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.components';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems,cartTotalPrice})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span className="heading">Product</span>
            </div>
            <div className="header-block">
                <span className="heading">Description</span>
            </div>
            <div className="header-block">
                <span className="heading">Quantity</span>
            </div>
            <div className="header-block">
                <span className="heading">Price</span>
            </div>
            <div className="header-block">
                <span className="heading">Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        }
        <div className="total">
            <span>TOTAL: ${cartTotalPrice}</span>
        </div>
        <div className="test-warning">*Please Use the following card for payments*<br/>4242 4242 4242 4242 - Exp: Any future date - CVV: Any 3 digit no</div>
        <StripeCheckoutButton price={cartTotalPrice}/>
    </div>
);

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);
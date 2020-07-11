import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price,clearEntireCart }) => {
    const priceInPaise = price * 100;
    const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;
    console.log(publishableKey)
    
    const onToken=(token)=>{
        console.log(token);
        clearEntireCart();
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Rawn Apparels Ltd."
            billingAddress
            shippingAddress
            currency="INR"
            image="http://svgshare.com/i/CUz.svg"
            description={`Your grand Total is ₹ ${price}`}
            amount={priceInPaise}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearEntireCart: () => dispatch(clearCart()),
});

export default connect(null,mapDispatchToProps)(StripeCheckoutButton);

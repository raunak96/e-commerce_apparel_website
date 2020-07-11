import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import { clearCart } from "../../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price,clearEntireCart }) => {
    const priceInPaise = price * 100;
    const publishableKey ="pk_test_51H3THjHv7ObCruyuLGMloy5t2SdYTFd7odff4UHCqMpz4Pd0ktNEVkqxlpbVcsGCuvpLF1xd7nbd2FmrmDvYnruS00vMytq2bf";
    
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

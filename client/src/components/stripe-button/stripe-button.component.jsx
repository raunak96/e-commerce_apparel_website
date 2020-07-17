import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import { clearCart } from "../../redux/cart/cart.actions";
import axios from "axios";

const StripeCheckoutButton = ({ price,clearEntireCart }) => {
    const priceInPaise = price * 100;
    const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;
    
    const onToken=async token=>{
        try {
            await axios({
                url: "payment",
                method: "post",
                data: {
                    amount: priceInPaise,
                    token,
                },
            });
            alert("Payment Successful");
            clearEntireCart();
        } catch (error) {
            console.log('Payment Error: ',JSON.parse(error));
            alert("There was an issue with your payment. Please make sure you used the correct card.");
        }
        
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

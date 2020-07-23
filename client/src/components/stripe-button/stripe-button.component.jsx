import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import { checkoutSuccess } from "../../redux/cart/cart.actions";
import axios from "axios";

const StripeCheckoutButton = ({ price,checkoutSuccessful }) => {
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
            checkoutSuccessful();
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
    checkoutSuccessful: () => dispatch(checkoutSuccess()),
});

export default connect(null,mapDispatchToProps)(StripeCheckoutButton);

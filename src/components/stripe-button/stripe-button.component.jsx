import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceInPaise = price * 100;
    const publishableKey ="pk_test_51H3THjHv7ObCruyuLGMloy5t2SdYTFd7odff4UHCqMpz4Pd0ktNEVkqxlpbVcsGCuvpLF1xd7nbd2FmrmDvYnruS00vMytq2bf";

    const onToken=token=>{
        console.log(token);
        alert("Payment Successful");
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

export default StripeCheckoutButton;

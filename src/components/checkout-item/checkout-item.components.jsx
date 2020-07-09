import React from 'react';
import "./checkout-item.styles.scss";

const CheckoutItem=({cartItem:{imageUrl,name,price, quantity}})=>(
    <div className="checkout-item">
    <div className="image-container">
        <img src={imageUrl} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button"><i class="fa fa-trash" aria-hidden="true"></i></span>
    </div>
);

export default CheckoutItem;
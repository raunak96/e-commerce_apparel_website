import React from 'react';
import "./checkout-item.styles.scss";
import {connect} from "react-redux";
import { clearCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem=({cartItem,clearItem})=>{
    const {imageUrl,name,price, quantity}=cartItem;
    return (
        <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={()=>clearItem(cartItem)}><i className="fa fa-trash" aria-hidden="true"></i></span>
        </div>
)};

const mapDispatchToProps=dispatch=> ({
    clearItem:item=>dispatch(clearCartItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
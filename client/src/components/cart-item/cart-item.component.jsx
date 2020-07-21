import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x ₹ {price}
            </span>
        </div>
    </div>
);

export default React.memo(CartItem);  
/* whenever cart-item added/removed from drop-down cartItems[] changes, thus cart-item gets rerendered for each element of cart-items even those which were
 present before..To prevent this, we memoise the Cart-item to prevent re-rendering if this Cart-item(identified by its key) did not change */
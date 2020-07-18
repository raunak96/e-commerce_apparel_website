import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const CollectionItem = ({item,addItem,currentUser}) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <h1>{name}</h1>
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            >
            {
                currentUser?(<CustomButton className="custom-button" inverted onClick={() => addItem(item)}>
                    Add to cart
                </CustomButton>):null
            }
                
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">₹ {price}</span>
            </div>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);

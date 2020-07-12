import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({   // the 2nd param is the props of this component i.e collection Component

    collection: selectCollection(ownProps.match.params.collectionId)(state), // state is always required for selector, since it already had other param
});                                                                         // , we passed state in this manner unlike other selector where state was the only param

export default connect(mapStateToProps)(CollectionPage);

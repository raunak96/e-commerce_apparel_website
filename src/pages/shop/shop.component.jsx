import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// This page displays the preview of collections in website

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collections: SHOP_DATA };
    }
    render() {
        const {collections}=this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id,...otherProperties})=>(
                        <CollectionPreview key={id} {...otherProperties}></CollectionPreview>
                    )) 
                }
            </div>
        )
    }
}

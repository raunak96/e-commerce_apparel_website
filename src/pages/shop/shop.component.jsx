import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

// This page displays the preview of collections in website

const ShopPage = ({collections}) => (
    <div className="shop-page">
        <CollectionsOverview />
    </div>
);



export default ShopPage;
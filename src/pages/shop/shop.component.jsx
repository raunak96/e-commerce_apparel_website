import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

// This page displays the preview of collections in website

const ShopPage = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
    </div>
);



export default ShopPage;
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

// This is the shop page which either directs to CollectionsOverview or Collection(particular category) page


const ShopPage=({match,fetchCollectionsStart})=> {
    
    useEffect(()=>{
        fetchCollectionsStart();
    },[fetchCollectionsStart]);   //only renders 1st time as fetchCollectionStart is a function which never changes

    return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                ></Route>
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                ></Route>
            </div>
        );
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);

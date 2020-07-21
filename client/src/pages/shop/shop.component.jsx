import React, { useEffect,lazy,Suspense } from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

// This is the shop page which either directs to CollectionsOverview or Collection(particular category) page

const CollectionPageContainer = lazy(()=>import("../collection/collection.container"));
const CollectionsOverviewContainer = lazy(()=>import("../../components/collections-overview/collections-overview.container"));

const ShopPage=({match,fetchCollectionsStart})=> {
    
    useEffect(()=>{
        fetchCollectionsStart();
    },[fetchCollectionsStart]);   //only renders 1st time as fetchCollectionStart is a function which never changes

    return (
        <div className="shop-page">
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
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
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);

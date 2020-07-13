import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {connect} from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner_HOC/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";

// This page displays the preview of collections in website

const CollectionsOverviewWithSpinner= WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner= WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    
    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
    }
    
    render() {
        const {match,isFetchingCollections}=this.props;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props)=><CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props}/>}
                ></Route>
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    render={(props)=><CollectionPageWithSpinner isLoading={isFetchingCollections} {...props}/>}
                ></Route>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionsFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

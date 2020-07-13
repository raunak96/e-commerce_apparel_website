import React from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

// This is the shop page which either directs to CollectionsOverview or Collection(particular category) page


class ShopPage extends React.Component {
    
    componentDidMount() {
        this.props.fetchCollectionsStartAsync();
    }
    
    render() {
        const {match}=this.props;
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
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null,mapDispatchToProps)(ShopPage);

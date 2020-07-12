import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {getShopData,firestore} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import { updateShopCollections } from "../../redux/shop/shop.actions";

// This page displays the preview of collections in website

class ShopPage extends React.Component {
    unsubscribeFromSnapshot=null;
    
    componentDidMount() {
        const collectionRef= firestore.collection('collections');
        
        collectionRef.onSnapshot(async snapshot=>{
            const shopData= getShopData(snapshot);
            this.props.updateCollection(shopData);
        })
    }
    
    render() {
        const {match}=this.props;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverview}
                ></Route>
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    component={CollectionPage}
                ></Route>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch=>({
    updateCollection: collections=>dispatch(updateShopCollections(collections))
})

export default connect(null,mapDispatchToProps)(ShopPage);

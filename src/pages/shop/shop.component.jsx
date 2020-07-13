import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {getShopData,firestore} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import { updateShopCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner_HOC/with-spinner.component";

// This page displays the preview of collections in website

const CollectionsOverviewWithSpinner= WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner= WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state={loading: true} ;    // We can also define state like this without calling super(), React does that automatically for us  

    unsubscribeFromSnapshot=null;
    
    async componentDidMount() {
        const collectionRef= firestore.collection('collections');
        
        const collectionSnapshot= await collectionRef.get();
        const shopData = getShopData(collectionSnapshot);
        this.props.updateCollection(shopData); // this means the shop data has been retrieved and update called for shop reducer
        this.setState({ loading: false });

        /*  OR use below code instead of .get()
        
        this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapshot=>{
            const shopData= getShopData(snapshot);
            this.props.updateCollection(shopData); // this means the shop data has been retrieved and update called for shop reducer
            this.setState( { loading:false } );
        }) 

        We can use onSnapshot or normal get method like other NOSQL db's to get data..Advantage of onSnpashot is that it is an event listener following
        Observable pattern and listens for changes(events) on Snapshot and returns the result continously unlike get which is 1-time only...SInce in this
        case we need ShopData only once, we can use the get method */
    }
    
    render() {
        const {match}=this.props;
        const {loading}= this.state;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}
                ></Route>
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}
                ></Route>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch=>({
    updateCollection: collections=>dispatch(updateShopCollections(collections))
})

export default connect(null,mapDispatchToProps)(ShopPage);

import ShopActionTypes from "./shop.types";
import {getShopData,firestore} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({   // start fetching collections
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess= collections=>({    // if fetch was successful send the data fetched as payload
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});
export const fetchCollectionsFailure= errorMessage=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

/*  thunks are actionCreators that returns a function instead of action(i.e normal actionCreators return object as in above functions)..They also get
'dispatch' as its argument...So whenever an Action-Creator returns a 'function', thunk automatically attaches to it and using dispatch we can dispatch other
actions inside this thunk...Thunk is mainly used to perform asynchronous actions... */

//  this is thunk as it returns a function...This is the function which is actually run by component which requires shopData and this dispatches the 
//  other actions and can handle async codes

export const fetchCollectionsStartAsync=()=>{
    return async dispatch=>{
        const collectionRef= firestore.collection('collections'); // get Collection reference of our collection called 'collections'
        dispatch(fetchCollectionsStart());
        
        try {
            const collectionSnapshot= await collectionRef.get();  // note below
            const shopData = getShopData(collectionSnapshot);
            dispatch(fetchCollectionsSuccess(shopData));
        } catch (error) {
            dispatch(fetchCollectionsFailure(error.message));
        }
    }
}
/*  OR use below code instead of .get()
        
        this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapshot=>{
            const shopData= getShopData(snapshot);
            ............
        }) 

        We can use onSnapshot or normal get method like other NOSQL db's to get data..Advantage of onSnpashot is that it is an event listener following
        Observable pattern and listens for changes(events) on Snapshot and returns the result continously unlike get which is 1-time only...SInce in this
        case we need ShopData only once, we can use the get method */
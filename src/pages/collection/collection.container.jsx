import { createStructuredSelector } from "reselect";

import {selectIsCollectionsNull } from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import {compose} from 'redux';

import CollectionPage from "./collection.component";
import WithSpinner from "../../components/with-spinner_HOC/with-spinner.component";



const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionsNull
});

// compose----> composes function from right to left and resulting function in this case takes CollectionPage as argument
const CollectionPageContainer = compose(connect(mapStateToProps),WithSpinner)(CollectionPage);  
/*                          OR
const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));
*/

export default CollectionPageContainer;

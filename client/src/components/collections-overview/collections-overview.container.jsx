import { createStructuredSelector } from "reselect";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { compose } from "redux";
import CollectionsOverview from "./collections-overview.component";
import WithSpinner from "../with-spinner_HOC/with-spinner.component";

const mapStateToProps= createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainer= compose(connect(mapStateToProps),WithSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview=({collections})=>(
    <div className="collections-overview">
         {collections.map(({ id, ...otherProperties }) => (
            <CollectionPreview key={id} {...otherProperties}></CollectionPreview>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
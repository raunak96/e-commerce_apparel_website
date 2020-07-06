import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item,index)=>index<4)   //to limit items to 4 in preview
                    .map(({id,...otherProperties}) => (                 // to map over this array which now has 4 items
                        <CollectionItem key={id}  {...otherProperties}></CollectionItem>
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;

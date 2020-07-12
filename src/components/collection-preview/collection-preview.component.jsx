import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter, Link } from "react-router-dom";

const CollectionPreview = ({ title, items,match,routeName }) => (
    <div className="collection-preview">
        <h1 className="title"><Link to={`${match.path}/${routeName}`}>{title.toUpperCase()}</Link></h1>
        <div className="preview">
            {
                items
                    .filter((item,index)=>index<4)   //to limit items to 4 in preview
                    .map(item => (                 // to map over this array which now has 4 items
                        <CollectionItem key={item.id}  item={item}></CollectionItem>
                ))
            }
        </div>
    </div>
);

export default withRouter(CollectionPreview);

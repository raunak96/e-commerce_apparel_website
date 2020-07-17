import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import {selectDirectoryCategories} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";

const Directory = ({categories}) => (
    <div className="directory-menu">
        {
            categories.map(({ id, ...otherProperties }                    // ...otherProperties stores rest of the properies like title,imageUrl etc in it
            ) => (
                <MenuItem key={id} {...otherProperties} />               // {...otherProperties} equivalent to {title:title} {size:size} etc
            ))                                              
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    categories: selectDirectoryCategories
});

export default connect(mapStateToProps)(Directory);

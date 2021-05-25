import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import  CollectionItem  from "../Collection"
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors"

import "./collections_overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections_overview">
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionItem key={id} {...otherCollectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
 })

export default connect(mapStateToProps)(CollectionsOverview);
import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors"

import CollectionItem from "../../Components/Collection_item"

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection)
  return (
    <div className="collection_page">
      <h2>Collection Page Boi</h2>
    </div>
  )
}

const mapStateToProps=(state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
import React from "react"
import Collection_item from "../Collection_item/"
import "./Collection.styles.scss"

const Collection = ({ title, items }) => (
  <div className="collection_preview">
    <h1 className="title"> {title.toUpperCase()}</h1>
    <div className="preview">
      {
        items.filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <Collection_item key={id} {...otherItemProps} />
        ))
      }
    </div>
  </div>
);

export default Collection;
import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../Components/collections_overview"
import CollectionPage from "../Collection"

const ShopPage = ({ match }) => (

  <div className="shop_page">
    
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    
  </div>
)



export default ShopPage;
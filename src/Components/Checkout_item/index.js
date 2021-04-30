import React from "react";

import "./checkoutItem.styles.scss"

const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price }}) => (
  <div className="checkout_item">
    <div className="image_container">
      <img src={imageUrl} alt="item"  />  
    </div>
    <span className="name"> {name} </span>
    <span className="quantity"> {quantity} </span>
    <span className="price"> {price} </span>
    <div className="remove_button">&#10005;</div>
  </div>
)

export default CheckoutItem;
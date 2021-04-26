import React from "react";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg"

import "./cart_icon.styles.scss"

const CartIcon = () => (
  <div className="cart_icon">
    <ShoppingIcon className="shopping_icon" />
    <span className="item_count">0</span>
  </div>
)

export default CartIcon;
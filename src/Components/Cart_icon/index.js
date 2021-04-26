import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg"

import "./cart_icon.styles.scss"

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart_icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping_icon" />
    <span className="item_count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
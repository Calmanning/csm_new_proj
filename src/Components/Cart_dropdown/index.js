import React from "react"
import { connect } from "react-redux"

import CartItem from "../Cart_item/"
import CustomButton from "../Custom_button"

import "./Cart_dropdown.styles.scss"

const CartDropdown = ({ cartItems }) => (
  <div className="cart_dropdown">
    <div className="cart_items">
      {cartItems.map(cartItem => (
      <CartItem key={CartItem.id} item={cartItem}/> )) }
    </div>
    <CustomButton className="button"> Go To Checkout</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(
  mapStateToProps
)(CartDropdown)
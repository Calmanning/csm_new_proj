import React from "react"

import CustomButton from "../Custom_button"

import "./Cart_dropdown.styles.scss"

const CartDropdown = () => (
  <div className="cart_dropdown">
    <div className="cart_items" />
    <CustomButton className="button"> Go To Checkout</CustomButton>
  </div>
)

export default CartDropdown
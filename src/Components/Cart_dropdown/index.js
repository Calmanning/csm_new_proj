import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";


import CartItem from "../Cart_item/"
import CustomButton from "../Custom_button"
import  { selectCartItems } from "../../redux/cart/cart.selectors"

import "./Cart_dropdown.styles.scss"

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart_dropdown">
    <div className="cart_items">
      {cartItems.length ? (
      cartItems.map(cartItem => (
      <CartItem key={CartItem.id} item={cartItem}
      />
       ))
      ) : (
        <span className="empty_message">Your cart is empty.</span>
      )}
    </div>
    <CustomButton onClick={() => history.push("/checkout") }> Go To Checkout</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

export default withRouter(connect(mapStateToProps)(CartDropdown))
import React from "react";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CheckoutItem from "../../Components/Checkout_item";
import StripeCheckoutButton from "../../Components/Stripe_button"

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors"

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout_page">
    <div className="checkout_header">
      <div className="header_block">
        <span>Product</span>
      </div>
      <div className="header_block">
        <span>Description</span>
      </div>
      <div className="header_block">
        <span>Quantity</span>
      </div>
      <div className="header_block">
        <span>Price</span>
      </div>
      <div className="header_block">
        <span>Remove</span>
      </div>

    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    )
    )}

    <div className="total">
      Total: ${total}
    </div>
    <StripeCheckoutButton price={total} />

    <div className="test_warning"> 
    **FOR TESTING: 
    <br />
    Use credit card#: 4242 4242 4242 4242  
    <br />
            Exp: 01/22 CVC: 123 </div>
  </div>



)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage)
import React from "react";
import { Link } from "react-router-dom"
import { connect } from  "react-redux"

import { ReactComponent as Logo } from "../../Assets/crown.svg"

import { auth } from '../../firebase/firebase.utils'
import CartIcon from "../Cart_icon/"

import "./Header.styles.scss"

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo_container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ? (
          <div className="option"
            onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>

        )}
      <CartIcon />
    </div>
  </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
 })

export default connect(mapStateToProps)(Header);
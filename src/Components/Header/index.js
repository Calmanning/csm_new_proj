import React from "react";
import { Link } from "react-router-dom"
import "./Header.styles.scss"
import { ReactComponent as Logo } from "../../Assets/crown.svg"

import { auth } from '../../firebase/firebase.utils'

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
        currentUser ? 
        <div className="option" 
        onClick={() => auth.signOut()}> 
        Sign Out 
        </div>
        :
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      }
    </div>
  
  </div>
)

export default Header;
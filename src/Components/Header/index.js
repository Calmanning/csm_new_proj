import React from "react";

import { connect } from "react-redux"
import { createStructuredSelector} from "reselect";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../Assets/crown.svg"

import { auth } from '../../firebase/firebase.utils'
import CartIcon from "../Cart_icon/"
import CartDropdown from "../Cart_dropdown/"

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./Header.styles" 

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {
        currentUser ? (
          <OptionLink
             as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>

        )}
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown /> 
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
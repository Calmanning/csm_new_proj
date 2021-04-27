import React from "react"
import "./Custom_button.styles.scss"

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (

 <button 
 className={`${inverted ? "inverted" : ""} 
   ${isGoogleSignIn ? 'google_sign_in' : ''} custom_button`}
 {...otherProps}
    >
    {children}
 </button> 
)

export default CustomButton;
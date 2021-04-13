import React from "react"
import "./Custom_button.styles.scss"

const CustomButton = ({ children, ...otherProps}) => (

 <button className="custom_button" {...otherProps} >
    {children}
 </button> 
)

export default CustomButton;
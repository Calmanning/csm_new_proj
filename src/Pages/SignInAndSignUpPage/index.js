import React from "react";

import SignIn from "../../Components/Sign_in/"
import Sign_up from "../../Components/Sign_up"

import "./SignInAndSignUp.styles.scss"

const SignInAndSignUpPage = () => (
  <div className="sign_in_and_sign_up">  
  <SignIn />
  <Sign_up />
  </div>

)

export default SignInAndSignUpPage;
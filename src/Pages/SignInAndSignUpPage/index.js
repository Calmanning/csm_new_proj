import React from "react";

import SignIn from "../../Components/Sign_in/"
import SignUp from "../../Components/Sign_up"

import "./SignInAndSignUp.styles.scss"

const SignInAndSignUpPage = () => (
  <div className="sign_in_and_sign_up">  
  <SignIn />
  <SignUp />
  </div>

)

export default SignInAndSignUpPage;
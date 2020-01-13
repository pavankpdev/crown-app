import React from "react";
import "./SignIn&SignUp.styles.scss";
import SignIn from "../../Components/Sign-In/Sign-In.component";
import SignUp from "../../Components/Sign-up/Sign-up.component";
const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;

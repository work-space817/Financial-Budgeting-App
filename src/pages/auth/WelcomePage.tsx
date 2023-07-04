import { useState } from "react";
import SignUp from "../../components/auth/register/SignUp";

const WelcomePage = () => {
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [logInVisible, setLogInVisible] = useState(false);

  return (
    <>
      <h1>WELCOME</h1>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <button type="button" className="btn btn-light">
          Log in
        </button>
        <button type="button" className="btn btn-light">
          Sign up
        </button>
      </div>
      <SignUp />
    </>
  );
};

export default WelcomePage;

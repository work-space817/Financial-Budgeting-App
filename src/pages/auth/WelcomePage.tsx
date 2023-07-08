import { useState } from "react";
import SignUp from "../../components/auth/register/SignUp";
import LogIn from "../../components/auth/login/LogIn";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const WelcomePage = () => {
  const [logInVisible, setLogInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);

  const showSignUp = (e: React.MouseEvent<HTMLElement>) => {
    if (e) {
      setSignUpVisible(true);
      setLogInVisible(false);
    }
  };
  const showLogIn = (e: React.MouseEvent<HTMLElement>) => {
    if (e) {
      setLogInVisible(true);
      setSignUpVisible(false);
    }
  };

  return (
    <>
      {/* <TransitionGroup>
        <CSSTransition timeout={500} classNames={"welcome_animation"}> */}
      <h1>WELCOME</h1>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <button onClick={showLogIn} type="button" className="btn btn-light">
          Log in
        </button>
        <button onClick={showSignUp} type="button" className="btn btn-light">
          Sign up
        </button>
      </div>
      {/* </CSSTransition>
      </TransitionGroup> */}
      {logInVisible && <LogIn />}
      {signUpVisible && <SignUp />}
    </>
  );
};

export default WelcomePage;

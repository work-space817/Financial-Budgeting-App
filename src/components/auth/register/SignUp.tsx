import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../common/input/Input";
import { IRegisterError, ISignUp } from "./types";
import http from "../../../api/http";

const SignUp = () => {
  const init: ISignUp = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",

    // currentBalacne: 0,
  };
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<IRegisterError>();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Formik Submit Form to Server", e);
    try {
      const result = await http.post("api/account/register", e);
      console.log("Result server good", result);
    } catch (err: any) {
      const error = err.response.data.errors as IRegisterError;
      if (error.email) {
        setFieldError("email", error.email[0]);
        return;
      }
      setError(error);
      console.log("Bad request", err);
    }
  };

  return (
    <>
      <form>
        <Input
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          field={""}
        />
        <Input
          type="password"
          label="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          field={""}
        />

        <button type="submit" onClick={onSubmit}>
          Sign up
        </button>
      </form>

      <p>
        Already have an account? <NavLink to="/login">Log in</NavLink>
      </p>
    </>
  );
};

export default SignUp;
function setFieldError(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}

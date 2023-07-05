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
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<IRegisterError>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setEmail(e.target.value);
    setName(e.target.value);
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("confirm", confirmPassword);
      // Виконати POST-запит до серверу на локальному хості 5000
      const response = await http.post("api/account/register", formData);

      // Обробити успішну відповідь від серверу
      console.log(response.data);

      // Очистити поля після відправки форми
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      // Обробити помилку, якщо сталася
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <Input
          type="email"
          label="Email address"
          value={email}
          onChange={handleChange}
          required
          placeholder="Email address"
          field={""}
        />
        <Input
          type="text"
          label="Name"
          value={name}
          onChange={handleChange}
          required
          placeholder="Name"
          field={""}
        />
        <Input
          type="password"
          label="Create password"
          value={password}
          onChange={handleChange}
          required
          placeholder="Password"
          field={""}
        />
        <Input
          type="password"
          label="confirm password"
          value={confirmPassword}
          onChange={handleChange}
          required
          placeholder="confirm Password"
          field={""}
        /> */}
        <div className="mb-3">
          <label>
            email:
            <input
              type="email"
              value={password}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            name:
            <input
              type="text"
              value={password}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Sign up</button>
      </form>

      <p>
        Already have an account? <NavLink to="/login">Log in</NavLink>
      </p>
    </>
  );
};

export default SignUp;

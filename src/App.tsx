import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/layouts/default/DefaultLayout";
import HomePage from "./pages/home/HomePage";
import AuthLayout from "./pages/layouts/authLayout/AuthLayout";
import { APP_ENV } from "./env";
import { useSelector } from "react-redux";
import { IAuthUser } from "./store/reducers/types";
import WelcomePage from "./pages/welcome/WelcomePage";
import ModalWindow from "./components/modal/ModalWindow";

const App = () => {
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return (
    <>
      <Routes>
        {/* {isAuth ? ( */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          {/* модальне вікно з повідомленням що вже зареєстровані + редірект на головну */}
        </Route>
        {/*  ) : ( */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<WelcomePage />} />
          {/* модальне вікно з повідомленням що вже зареєстровані + редірект на головну */}
        </Route>
        {/* )} */}
      </Routes>
    </>
  );
};

export default App;

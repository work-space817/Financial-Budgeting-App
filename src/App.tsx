import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/layouts/default/DefaultLayout";
import HomePage from "./pages/home/HomePage";
import AuthLayout from "./pages/layouts/authLayout/AuthLayout";
import WelcomePage from "./pages/welcome/WelcomePage";
import SettingsPage from "./pages/settings/SettingsPage";

const App = () => {
  // const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return (
    <>
      <Routes>
        {/* {isAuth ? ( */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="settings" element={<SettingsPage />} />
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

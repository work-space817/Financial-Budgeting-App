import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/layouts/default/DefaultLayout";
import HomePage from "./pages/home/HomePage";
import WelcomePage from "./pages/auth/WelcomePage";
import AuthLayout from "./pages/layouts/authLayout/AuthLayout";
import { APP_ENV } from "./env";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

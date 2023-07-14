import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, useNavigate } from "react-router-dom";
import setAuthToken from "./api/setAuthToken";
import { AuthUserActionType } from "./store/reducers/types";
import { IUser } from "./components/auth/login/types";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  // const user = jwt_decode<IUser>(localStorage.token);
  // store.dispatch({ type: AuthUserActionType.LOGIN_USER, payload: user });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

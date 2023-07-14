import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import HeaderReducer from "./reducers/HeaderReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
    headers: HeaderReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [thunk]
});
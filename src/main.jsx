import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { PersistGate } from "redux-persist/integration/react";
import { Router, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { persistor } from "./redux/store";
import { configureStore } from '@reduxjs/toolkit';
import "./index.css";
import "./script.css";
import "./libs.bundle.css";
//import "./script.scss";
import App from "./App";

import rootReducer from './redux/Reducer';
const store = configureStore({ reducer: rootReducer });

const root = createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

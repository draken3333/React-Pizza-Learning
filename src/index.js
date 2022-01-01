import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./scss/app.scss"
import { BrowserRouter as Router } from "react-router-dom";

import store from "./redux/store"
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");






 
ReactDOM.render(
  <Router>

    < Provider store={store}>
      <App />
    </ Provider>
  </Router>
  , rootElement
);


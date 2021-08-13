import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Main from "./MainComponent";


ReactDOM.render(
  <BrowserRouter>
<Main />
  </BrowserRouter>,
  document.getElementById("root")
);

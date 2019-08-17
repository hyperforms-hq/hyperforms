import React from "react";
import ReactDOM from "react-dom";
import "./styles/dom.scss";
import "./styles/bulma.scss";
import "./styles/elements.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import AppRouter from "./common/components/app-router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

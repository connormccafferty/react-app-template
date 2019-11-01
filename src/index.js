import React from "react";
import ReactDOM from "react-dom";

import InBrowser from "./InBrowser";
import App from "./App";

import "./index.css";

const checkEnv = ({ fin }) => {
    if (!fin) {
        return <InBrowser />;
    }
    return <App fin={fin} />;
};

ReactDOM.render(checkEnv(window), document.getElementById("root"));

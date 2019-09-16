import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";

const checkEnv = ({ fin }) => {
    if (!fin) {
        return (
            <div>
                The fin API is not available - you are probably running in a
                browser.
            </div>
        );
    }
    return <App fin={fin} />;
};

ReactDOM.render(checkEnv(window), document.getElementById("root"));

module.hot.accept();

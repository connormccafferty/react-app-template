import React from "react";
import ReactDOM from "react-dom";
import { createChannel, joinChannel } from "./channels";
import App from "./App";

import "./index.css";

function openDevTools(fin) {
    const { identity } = fin.Window.getCurrentSync();
    fin.System.showDeveloperTools(identity);
}

const init = async fin => {
    const app = await fin.Application.getCurrent();
    const win = await fin.Window.getCurrent();

    openDevTools(fin);

    // only create channel provider from the main window
    // otherwise, join the channel
    if (win.identity.name === app.identity.uuid) {
        createChannel(fin);
    } else {
        joinChannel(fin);
    }
};

const checkEnv = ({ fin }) => {
    if (!fin) {
        return (
            <div>
                The fin API is not available - you are probably running in a
                browser.
            </div>
        );
    } else {
        init(fin);
        return <App fin={fin} />;
    }
};

ReactDOM.render(checkEnv(window), document.getElementById("root"));

/* eslint-disable */
import React, { useEffect } from "react";
import Table from "./Table";
import PropTypes from "prop-types";

function App({ fin }) {
    useEffect(() => {
        (async () => {
            await fin.desktop.ExcelService.init();
        })();
    });

    return (
        <div className="main">
            <div className="logo-container">
                <img src="assets/logo.svg" />
            </div>
            <div>
                <Table fin={fin} />
            </div>
        </div>
    );
}

App.propTypes = {
    fin: PropTypes.object.isRequired
};

export default App;

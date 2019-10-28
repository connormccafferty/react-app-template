/* eslint-disable */
import React from "react";
import useExcelService from "./useExcelService";
import Table from "./Table";
import PropTypes from "prop-types";

function App({ fin }) {
    useExcelService(fin);

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

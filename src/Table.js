import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import ExportData from "./ExportData";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const columnDefs = [
    { headerName: "Date", field: "date", sortable: true, filter: true },
    { headerName: "Open", field: "open", sortable: true, filter: true },
    { headerName: "High", field: "high", sortable: true, filter: true },
    { headerName: "Low", field: "low", sortable: true, filter: true },
    { headerName: "Close", field: "close", sortable: true, filter: true },
    { headerName: "Volume", field: "volume", sortable: true, filter: true }
];

const Table = ({ fin }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const API_URL =
            "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFLX&outputsize=full&apikey=CD8DPESXRYNAPRSW";

        fetch(API_URL)
            .then(response => response.json())
            .then(apiData => {
                let timeSeriesKeys = Object.keys(
                    apiData["Time Series (Daily)"]
                );
                let timeSeries = [];

                for (let i = 0; i < timeSeriesKeys.length; i++) {
                    let entry = {};
                    entry[timeSeriesKeys[i]] =
                        apiData["Time Series (Daily)"][timeSeriesKeys[i]];
                    timeSeries.push(entry);
                }

                let mappedData = timeSeries.map(obj => {
                    let key = Object.keys(obj)[0];
                    let newObj = {};
                    newObj.date = key;
                    newObj.open = obj[key]["1. open"];
                    newObj.high = obj[key]["2. high"];
                    newObj.low = obj[key]["3. low"];
                    newObj.close = obj[key]["4. close"];
                    newObj.volume = obj[key]["5. volume"];
                    return newObj;
                });
                setData(mappedData);
            });
    }, []);

    if (data.length) {
        return (
            <div
                className="ag-theme-balham"
                style={{ height: "100vh", width: 1200 }}
            >
                <>
                    <h1>NFLX Time Series Daily</h1>
                    <ExportData fin={fin} data={data} />
                </>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={data}
                ></AgGridReact>
            </div>
        );
    }
    return <p>Loading...</p>;
};

export default Table;

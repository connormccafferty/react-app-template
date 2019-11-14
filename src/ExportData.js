import React, { useState, useEffect } from "react";

const ExportData = ({ data }) => {
    const [excelData, setExcelData] = useState([]);

    useEffect(() => {
        if (data.length) {
            let shapedData = shapeData(data);
            setExcelData(shapedData);
        }
    }, [data]);

    function shapeData(data) {
        const headers = ["Date", "Open", "High", "Low", "Close", "Volume"];
        let shapedData = data.map(obj => Object.values(obj));
        return [headers, ...shapedData];
    }

    function exportToExcel(url) {
        let filename = `export-${Date.now()}.xlsx`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: excelData, fileName: filename })
        });
    }

    return (
        <button
            onClick={() => exportToExcel("http://localhost:5555/export-excel")}
        >
            Export
        </button>
    );
};

export default ExportData;

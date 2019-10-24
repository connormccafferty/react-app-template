import React, { useState, useEffect } from "react";

const ExportData = ({ fin, data }) => {
    const [excelData, setExcelData] = useState([]);

    useEffect(() => {
        if (data.length) {
            let shapedData = shapeData(data);
            setExcelData(shapedData);
        }
    }, [data]);

    async function launchExcel() {
        await fin.desktop.Excel.run();
    }

    function shapeData(data) {
        const headers = ["Date", "Open", "High", "Low", "Close", "Volume"];
        let shapedData = data.map(obj => Object.values(obj));
        return [headers, ...shapedData];
    }

    function exportToExcel() {
        launchExcel();

        fin.desktop.ExcelService.addEventListener("excelConnected", () => {
            fin.desktop.Excel.addWorkbook()
                .then(async wb => {
                    let worksheets = await wb.getWorksheets();
                    let ws = worksheets[0];
                    ws.setCells(excelData);
                })
                .catch(err => console.log(err));
        });
    }

    return <button onClick={() => exportToExcel()}>Export</button>;
};

export default ExportData;

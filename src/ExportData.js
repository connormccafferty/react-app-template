import React, { useState, useEffect } from "react";
import XLSX from "xlsx";

const ExportData = ({ fin, data }) => {
    const [excelData, setExcelData] = useState([]);

    useEffect(() => {
        if (data.length) {
            let shapedData = shapeData(data);
            setExcelData(shapedData);
        }
    }, [data]);

    // async function launchExcel() {
    //     await fin.desktop.Excel.run();
    // }

    function shapeData(data) {
        const headers = ["Date", "Open", "High", "Low", "Close", "Volume"];
        let shapedData = data.map(obj => Object.values(obj));
        return [headers, ...shapedData];
    }

    // function exportToExcel() {
    //     launchExcel();

    //     fin.desktop.ExcelService.addEventListener("excelConnected", () => {
    //         fin.desktop.Excel.addWorkbook()
    //             .then(async wb => {
    //                 let worksheets = await wb.getWorksheets();
    //                 let ws = worksheets[0];
    //                 ws.setCells(excelData);
    //             })
    //             .catch(err => console.log(err));
    //     });
    // }

    function exportToExcel() {
        let filename = `app-exports.xlsx`;
        let wb = XLSX.utils.book_new();

        let wsName = `export-${Date.now()}`;
        let xlsxFile = XLSX.utils.aoa_to_sheet(excelData);
        XLSX.utils.book_append_sheet(wb, xlsxFile, wsName);
        XLSX.writeFile(wb, filename);
    }

    return <button onClick={() => exportToExcel()}>Export</button>;
};

export default ExportData;

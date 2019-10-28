import { useEffect } from "react";

const useExcelService = fin => {
    useEffect(() => {
        if (!fin.desktop.Excel) {
            const script = document.createElement("script");

            script.src =
                "https://openfin.github.io/excel-api-example/client/fin.desktop.Excel.js";
            script.onload = async () => {
                await fin.desktop.ExcelService.init();
            };

            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
        return;
    }, [fin]);
};

export default useExcelService;

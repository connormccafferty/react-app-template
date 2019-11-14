const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const XLSX = require("xlsx");
const fs = require("fs");

const app = express();
const PORT = 5555;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "1gb" }));

app.use(cors());

app.post("/export-excel", (req, res) => {
    let { data, fileName } = req.body;
    let wb = XLSX.utils.book_new();
    let wsName = fileName.split(".")[0];
    let xlsxFile = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, xlsxFile, wsName);
    XLSX.writeFile(wb, fileName);
    let path = new URL(`file:///C:\\Documents\\${fileName}`);

    fs.rename(`./${fileName}`, path, err => {
        if (err) throw err;
        console.log("File saved at ", path);
    });

    res.status(200).send(`${fileName} was successfully exported and saved`);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

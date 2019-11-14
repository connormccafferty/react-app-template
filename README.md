# ~~React ExcelService Example~~

~~A simple example displaying how to export data to the Excel service. The ExportData component transforms the data it receives into an array of arrays which the Excel API can consume. First we launch Excel with `.run()`. Then we listen for the 'excelConnected' event to first add a workbook with `addWorkbook()` then select a worksheet with `getWorksheets()` (NOTE: there are some issues with the `getWorksheetByName()` method which is why we take this approach for now). Once we have the worksheet reference, we can write our array of arrays to the worksheet with `setCells()`.~~

# Excel Export w/ Node FS

This example uses a very simple express server that leverages the [XLSX](https://www.npmjs.com/package/xlsx) library to convert data sent from the client to an `.xlsx` file and Node's `fs` to save the file to any desired path.

### How to use this:

- Clone this repository: `git clone -b excel https://github.com/connormccafferty/react-app-template`
- Install the dependencies: `cd react-app-template` & `npm install`
- Start the live-server: `npm start`
- Start the express server: `npm run start:server`
- Launch the OpenFin application: `npm run launch`


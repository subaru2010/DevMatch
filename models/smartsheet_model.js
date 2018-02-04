const ssSdk = require("smartsheet");
// TODO: How to run at app load???
var column = [
    {
      "title": "New Picklist Column 1",
      "type": "PICKLIST",
      "options": [
        "First",
        "Second",
        "Third"
      ],
      "index": 4
    },
    {
      "title": "New Date Column",
      "type": "DATE",
      "validation": true,
      "index": 4
    }
];

// Set options
var options = {
    sheetId: 3585229588850564,
    body: column
};

// Add columns to the sheet
ssSdk.sheets.addColumn(options)
    .then(function (newColumns) {
        console.log(newColumns);
    })
    .catch(function (error) {
        console.log(error);
    });
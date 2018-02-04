const express = require("express");
const router = express.Router();
const ssSdk = require("smartsheet");

// The API identifies columns by Id, but it's more convenient to refer to column names. Store a map here
var columnMap = {};

// Helper function to find cell in a row
function getCellByColumnName(row, columnName) {
    let columnId = columnMap[columnName];
    return row.cells.find(function(c) {
        return (c.columnId == columnId);
    });
}

router.get("/get", (req, res) => {

})

router.post("/create", (req, res) => {
    // var req.body = [
    //     {
    //       "toTop": true,
    //       "cells": [
    //         {
    //           "columnId": 7960873114331012,
    //           "value": true
    //         },
    //         {
    //           "columnId": 642523719853956,
    //           "value": "New status",
    //           "strict": false
    //         }
    //       ]
    //     },
    //     {
    //       "toTop": true,
    //       "cells": [
    //         {
    //           "columnId": 7960873114331012,
    //           "value": true
    //         },
    //         {
    //           "columnId": 642523719853956,
    //           "value": "New status",
    //           "strict": false
    //         }
    //       ]
    //     }
    //   ];
    const options = {
        sheetId: 3585229588850564,
        body: req.body
    };
    ssSdk.sheets.addRows(options)
        .then(function (newRows) {
            console.log(newRows);
        })
        .catch(function (err) {
            console.log(err);
        });
});

module.exports = router;


require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
// const db = require("./models");
const controllers = require("./controllers");
const ssSdk = require("smartsheet");

const app = express();
const PORT = process.env.PORT || 3306;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// Serve up static assets
app.use(express.static("client/build"));

// API controllers
app.use(controllers);
// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


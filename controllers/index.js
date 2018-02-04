const path = require("path");
const router = require("express").Router();
const inputController = require("input_controller");

// API Routes
router.use("/api/input", inputController);
// If no API routes are hit, send the React app
router.use( (req, res) => {
    res.sendFile(path.join(__dirname, "../server.js"));
});

module.exports = router;
// var smartsheet = client.createClient({accessToken:'voaya5lwe6gzccnw2ebc64rzif'});
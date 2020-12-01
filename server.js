const express = require('express');

const app = express();

// using the Express server to Serve our static files.
app.use(express.static("./dist/aang-one"));

// Wait for a request to any path and redirect all of the requests to index.html.
app.get("/*", function(req, res) {
    res.sendFile("index.html", {root: "dist/<name-on-package.json>/"});
});

// app.listen(process.env.PORT || 8080);
app.listen(process.env.PORT || 8080);
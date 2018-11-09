var express = require("express");
var app = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function() {
    console.log("Hot Restaurant");
    console.log("http://localhost:" + PORT);
});
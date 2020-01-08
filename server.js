var mongoose = require("mongoose");
var express = require("express");
var exphbs = require('express-handlebars');
var cheerio = require("cheerio");
var axios = require("axios");
var logger = require("morgan");
var bodyParser = require("body-parser");


var app = express();

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/scraped_news");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose")
})

var collections = ["articles"];

var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log("App running on port 3000!");
});
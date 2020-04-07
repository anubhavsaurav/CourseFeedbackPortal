/*
	Staring up our server/microservice: The following peice of code starts up our server, tells which 
	port to listen to and a callback on successful deployment
*/

//import dependencies
require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// define the Express app
const app = express();

const port = process.env.PORT || 4000;

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan("combined"));

const questionsRouter = require("./routes/QuestionAPI");

app.use("/routes/questions", questionsRouter); // ********************CHANGED

// start the server
var host = process.env.YOUR_HOST || "0.0.0.0";
app.listen(port, host, function () {
  console.log("Listening on port ", port);
});

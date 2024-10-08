require("dotenv").config();
const http = require("http");
const express = require("express");
const { connectDB } = require("./db/dbconnect");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Database connection file
connectDB();
app.use("/v1", routes);

app.get('/', (req, res) => {
  res.send('Hello, Expense World!');
});

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started on port: ", process.env.PORT);
});
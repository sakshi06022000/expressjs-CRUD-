const client = require('./connection.js');
const express = require("express");
const app = express();
const port = 4050;
const hostname = "localhost";

app.listen(port, () => {
    console.log(`Server is created at http://${hostname}:${port}`);
});

client.connect();
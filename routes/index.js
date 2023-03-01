// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const client = require('../connection.js');
const express = require("express");
const app = express();
const port = 4500;
const hostname = "localhost";

const student =require('./student.js')
const teacher =require('./teacher.js')

//another way
// import users from './routes./user.js'

//load router module middleware
app.use('/student', student)
app.use('/teacher', teacher)

app.listen(port, () => {
    console.log(`Server is created at http://${hostname}:${port}`);
});

client.connect();

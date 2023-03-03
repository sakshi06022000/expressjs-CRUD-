// const express = require('express');
// const app = express();
// const multer = require('multer');

// const upload = multer({ dest: './uploads' });

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/upload', upload.single('file'), (req, res) => {
//     const file = req.file;
//     console.log(file);
//     res.send('File uploaded successfully');
// });

// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });

var express= require('express');
const app = express();
var fileupload = require('express-fileupload');
app.use(fileupload());

app.get("/", (req, res, next) => {
    res.status(200).send("Hello world");
});
app.post("/upload", function (req, res, next) {
    console.log(req.files);
    res.send({
        success: true,
        message: "File uploaded!"
    });
})
app.listen(3000, () => {
    console.log("Started on port: 3000");
});
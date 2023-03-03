const client = require('./connect.js');
const express = require('express');

const hostname = "localhost";
const port = 5000;
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.get("/", (req, res) => {
    res.send("Hello world");
});

const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        res.send('No file uploaded');
    } else {
        res.send('File uploaded successfully');
    }
});

app.post('/uploads', upload.array('file', 3), (req, res) => {
    if (!req.files || req.files.length === 0) {
        res.send('No files uploaded');
    } else {
        res.send(`${req.files.length} file(s) uploaded successfully`);
    }
});


app.post('/uploadfile', upload.single('file'), (req, res) => {
    // const file = req.file;
    if (!req.file) {
        const err = new Error('Please upload a file')
        err.httpStatusCode = 400
        return next(err)
    }
    res.send(req.file);
})

app.post('/uploadfiles', upload.array('file', 3), (req, res) => {
    const files = req.files;
    if (!files) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    } else {
        res.send(files);
    }
});

app.listen(port, () => {
    console.log(`Server is created at http://${hostname}:${port}`);
});

// client.connect();


// const { json } = require("express");
// const express = require("express")
// const fileUpload = require("express-fileupload")

// const app = express()

// app.use(fileUpload());

// app.get("/", (req, res) => {
//     res.send("Hello world");
// });


// //Upload Endpont
// app.post('/upload', (req, res) => {
//     // console.log(req);
//     // if(req.files === null){
//     //     return res.status(400, json({msg:'no file Uploaded'}));
//     // }
//     console.log(req.Files);
//     const file = req.files.file;

//     file.mv(`${__dirname}/uploads/${file.name}`, err => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send(err);
//         }
//         res.json({ filename: file.name, filepath: `${__dirname}/uploads/${file.name}` })
//     });
// });

// app.listen(5050, () => console.log('server started...'));

// const express = require("express");
// const multer = require("multer");
// const app = express();

// const upload = multer({ dest: "uploads/" });

// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

// //single
// app.post("/upload", upload.single("file"), (req, res) => {
//     res.send({ status: "success" });
// });

// //multipe file upload
// app.post("/upload", upload.array("file"), (req, res) => {
//     res.send({ status: "success" });
// });

// app.listen(4000, () => console.log("listening on port 4000"));





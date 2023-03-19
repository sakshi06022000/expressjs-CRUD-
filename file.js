const client = require('./connection.js')
const express = require('express')
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const bodyParser = require('body-parser')
router.use(bodyParser.json());

router.post('/uploadfile', upload.single('file'), (req, res) => {
    // const file = req.file;
    if (!req.file) {
        const err = new Error('Please upload a file')
        err.httpStatusCode = 400
        return next(err)
    }
    res.send(req.file);
})

router.post('/uploadfiles', upload.array('file', 3), (req, res) => {
    const files = req.files;
    if (!files) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    } else {
        res.send(files);
    }
});
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const fileUrl = `${__sfilename}`;
    return res.status(200).json({ url: fileUrl });
});

module.exports = router;


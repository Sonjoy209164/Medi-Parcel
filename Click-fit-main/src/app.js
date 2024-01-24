const path = require('path');
const express = require('express');
const multer = require('multer');
const app = express();

const Port = process.env.PORT || 5000;

// Storage
const diskstorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})
// upload func
const upload = multer({
    storage: diskstorage,
    fileFilter: (req, file, cb) => {
        const fileType = /jpeg|png|jpg|gif/
        const extName = fileType.test(path.extname(file.originalname));
        const mimeType = fileType.test(file.mimetype);
        if (extName || mimeType) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!')
        }
    }
}).array('images');

const staticPath = path.join(__dirname, '../public')

app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// uploading image
app.post('/uploadImages', (req, res) => {
    console.log(req.body);
    upload(req, res, (err) => {
        if(err) {
            res.status(403).send({message: err.message})
        } else {
            res.send({message: "upload successful"})
        }
    })
})

app.get('/', (req, res) => {
    res.send('hello form')
})

app.listen(Port, () => {
    console.log('Server running')
})
const express = require('express')
const app = express()
const PORT = 3001
const path = require('path')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })

app.set("view engine", "ejs")

app.get('/upload', (req,res) => {
res.render('upload')
})

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('uploaded');
});

app.listen(process.env.PORT || 3001, ()=>{
console.log('Server start on port : ', PORT);
})
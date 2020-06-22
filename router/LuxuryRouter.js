const luxuryModel = require('../model/LuxuryModel');
const express = require('express');
const router = express.Router();

const AWS = require("aws-sdk");
const multer = require('multer');
const multerS3 = require("multer-s3");
const path = require("path");


// S3에 저장되는 객체 키 - 임의의 이름 만들기(시분초) + 난수 + 확장자
const now = new Date()
const itemKey = 'upload/' + now.getHours() + now.getMinutes() + now.getSeconds() + Math.floor(Math.random() * 1000);

// multer 사용
const upload = multer({
    storage: multerS3({
        s3: new AWS.S3,
        bucket: "idu-2020-12715",
        key: function (req, file, cb) {
            console.log(file);
            let ext = path.extname(file.originalname);
            cb(null, itemKey + ext);
        },
        acl: 'public-read',
        mimetype:'image/jpeg',
        location: "/upload"
    })
})



// mapping
router.get('/', index); // 메인
router.post('/upload', upload.single('img'), fileUpload); // 파일 업로드





// index 이동
async function index(req, res) {
    res.render('upload');
}

async function fileUpload(req, res) {
    const name = req.file.key;
    const url = req.file.location;

    await luxuryModel.uploadFile(name, url);

    res.render('viewUpload', {name: name, url: url});
}


module.exports = router;
const fs = require('fs');
const Sequelize = require('sequelize');
const AWS = require("aws-sdk");


const sequelize = new Sequelize('s3', 'admin', 'kimevery0', {
    dialect: 'mysql', host :'idu-aws-mysql.ci0o8f9dum5o.ap-northeast-2.rds.amazonaws.com'
})
AWS.config.loadFromPath(__dirname + "./../aws_config.json")


const fileUpload = sequelize.define('upload', {
    name: Sequelize.STRING,
    url: Sequelize.STRING,
}, { timestamps: false })


// 모델 클래스
class LuxuryModel {
    constructor(){
        try{
            fileUpload.sync({force: true});
        }catch (err){
            console.error(err);
        }
    }

    async uploadFile(name, url) {
        var image = {
            name: name,
            url: url
        }
        let ret = await fileUpload.create(image)

        if (ret) console.log("저장성공")
        else console.log("저장실패")
    }

}

module.exports = new LuxuryModel();
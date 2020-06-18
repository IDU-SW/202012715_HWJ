// mongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/example', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('open', () => {
    console.log('Mongoose Success');
});
db.on('error', (err) => {
    console.log('Mongoose Fail');
});

// 스키마 정의 및 생성
const LuxuryTable = mongoose.Schema({
    brand: String,
    founder: String,
    country: String
});
LTable = mongoose.model('luxuries', LuxuryTable);

// json 데이터 파일 가져오기
const fs = require('fs');

// 모델 클래스
class LuxuryModel {
    
    // 생성자, JSON 파일에 있는 데이터를 가져와서 입력
    constructor(){
        try{
            const data = fs.readFileSync('./model/data.json');
            const luxuries = JSON.parse(data);
            for (var luxury of luxuries){
                this.luxurydata(luxury);
            }
        }catch (err){
            console.error(err);
        }
    }

    // 초기값 넣기
    async luxurydata(luxury) {
        try {
            await LTable.create({
                brand: luxury.brand,
                founder: luxury.founder,
                country: luxury.country,
            }, {logging: false});
        }catch(error){
            console.error(error);
        }
    }



    // 전체 List
    async getLuxuryList() {
        return await LTable.find({});
    }

    // 상세
    async getLuxuryDetail(luxuryId) {
        try {
            var result = await LTable.find({_id:luxuryId});
            if(result)
                return result[0];
            else
                console.error(error);
        }catch(error){
            console.error(error);
        }
    }

    // 추가
    async addLuxury(brand, founder, country) {
        let newLuxury = { brand, founder, country };
        try {
            await this.luxurydata(newLuxury);
        } catch (error) {
            console.error(error);
        }
    }


    // 수정
    async editLuxury(luxuryId, brand, founder, country) {
        try {
            let luxury = await LTable.findOne({_id: luxuryId});
            luxury.brand = brand;
            luxury.founder = founder;
            luxury.country = country;
            await luxury.save();
        }
        catch (error) {
            console.error(error);
        }
    }



    // 삭제
    async delLuxury(luxuryId) {
        try {
            await LTable.destroy({_id:luxuryId});
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LuxuryModel();
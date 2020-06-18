const fs = require('fs');
const data = fs.readFileSync('./model/data.json');

// myslq DB 연동
const Sequelize = require('sequelize');
const dbConnectUri = 'mysql://dev:secret@127.0.0.1:3306/example';
const sequelize = new Sequelize(dbConnectUri); 

// luxuries 테이블 클래스 정의
class LuxuryTable extends Sequelize.Model {}
LuxuryTable.init({
    luxury_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    brand: Sequelize.STRING(30),
    founder: Sequelize.STRING(30),
    country: Sequelize.STRING(20)
}, {tableName: 'luxuries', sequelize})


// 모델 클래스
class LuxuryModel {
    
    // 생성자, JSON 데이터를 테이블에 추가하는 메소드(prepareTable()) 호출
    constructor(){
        try{
            this.prepareTable();
        }catch (err){
            console.error(err);
        }
    }

    // 테이블 생성 및 json 데이터를 테이블에 입력하는 메소드(jsonToDB()) 호출
    async prepareTable() {
        try{
            await LuxuryTable.sync({force:true});
            const luxuries = JSON.parse(data);
            for (var luxury of luxuries) {
                await this.luxurydata(luxury);
            }
        }catch(error){
            console.log('테이블 생성 실패', error);
        }
    }

    // insert Data
    async luxurydata(luxury) {
        try {
            const ret = await LuxuryTable.create({
                brand: luxury.brand,
                founder: luxury.founder,
                country: luxury.country,
            }, {logging: false});
            const newData = ret.dataValues;
        }catch(error){
            console.error(error);
        }
    }



    // 전체 List
    async getLuxuryList() {
        var results = await LuxuryTable.findAll()     
        return results;
    }

    // 상세
    async getLuxuryDetail(luxuryId) {
        try {
            var result = await LuxuryTable.findAll({where: {luxury_id:luxuryId}});
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
            var newData = await this.luxurydata(newLuxury);
            return newData;
        } catch (error) {
            console.error(error);
        }
    }


    // 수정
    async editLuxury(luxuryId, brand, founder, country) {
        try {
            let luxury = await LuxuryTable.findByPk(luxuryId);
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
            console.log(luxuryId)
            await LuxuryTable.destroy({where: {luxury_id:luxuryId}});
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LuxuryModel();
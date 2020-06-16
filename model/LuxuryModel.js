const pool = require('./dbConnection');
const { prepareTable } = require('./prepareTable');


class LuxuryModel {

    constructor() {
        try {
            prepareTable();
        } catch (error) {
            console.error(error);
        }
    }


    // 전체 List
    async getLuxuryList() {
        try {
            const conn = await pool.getConnection();
            const ret = await conn.query('SELECT * FROM luxuries;');
            conn.release();
            return ret[0];
        } catch (error) {
            console.error(error);
        }
    }

    // 상세
    async getLuxuryDetail(luxuryId) {
        try {
            const conn = await pool.getConnection();
            const ret = await conn.query('select * from luxuries where luxury_id=?;', luxuryId);
            conn.release();
            return ret[0];
        } catch (error) {
            console.error(error);
        }
    }

    // 추가
    async addLuxury(brand, founder, country) {
        let newLuxury = { brand, founder, country };
        try {
            const conn = await pool.getConnection();
            const ret = await conn.query('insert into luxuries set ?;', newLuxury);
            conn.release();
            return newLuxury;
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = new LuxuryModel();
const fs = require('fs');
const pool = require('./dbConnection');


exports.prepareTable = async () => {
    const sql = 'DROP TABLE IF EXISTS luxuries; CREATE TABLE luxuries ( luxury_id int primary key auto_increment, brand varchar(30), founder varchar(30), country varchar(20) );';
    await pool.query(sql).then(ret => {
        jsonToDB();
    }).catch(error => {
        console.log(error);
        pool.end();
    });
}

// >> json에 있는 데이터를 DB에 저장
async function jsonToDB() {
    const data = fs.readFileSync('./model/data.json');
    this.luxuries = JSON.parse(data)

    for (var luxury of luxuries) {
        await luxurydata(luxury);
    }
}

async function luxurydata(luxury) {
    let conn;
    try {
        conn = await pool.getConnection();
        const sql = 'INSERT INTO luxuries SET ?;';
        const data = { brand : luxury.brand, founder : luxury.founder, country : luxury.country};
        await conn.query(sql, data);
    } catch (error) {
        console.error(error);
    } finally {
        if ( conn )
            conn.release();
    } 
}
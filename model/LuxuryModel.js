const fs = require('fs');

class Luxury {
    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.luxuries = JSON.parse(data)
    }

    // 전체 List
    getLuxuryList() {
        if (this.luxuries) {
            return this.luxuries;
        }
        else {
            return [];
        }
    }

    // 추가
    addLuxury(brand, founder, country) {
        return new Promise((resolve, reject) => {
            let last = this.luxuries[this.luxuries.length - 1];
            let id = last.id + 1;

            let newLuxury = { id, brand, founder, country };
            this.luxuries.push(newLuxury);

            resolve(newLuxury);
        });
    }


    // 상세
    getLuxuryDetail(luxuryId) {
        for (var luxury of this.luxuries) {
            if (luxury.id == luxuryId) {
                return luxury;
            }
        }
        reject({ msg: 'Can not find luxury', code: 404 });
    }
}

module.exports = new Luxury();
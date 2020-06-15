const express = require('express');
const router = express.Router();
const luxuryModel = require('../model/LuxuryModel');

router.get('/luxuries', showLuxuryList);
router.get('/luxuries/:luxuryId', showLuxuryDetail);
router.post('/luxuries', addLuxury);

module.exports = router;

function showLuxuryList(req, res) {
    const luxuryList = luxuryModel.getLuxuryList();
    const result = { data:luxuryList, count:luxuryList.length };
    res.send(result);
}


// Async-await를 이용하기
async function showLuxuryDetail(req, res) {
    try {
        const luxuryId = req.params.luxuryId;
        console.log('luxuryId : ', luxuryId);
        const info = await luxuryModel.getLuxuryDetail(luxuryId);
        res.send(info);
    }
    catch ( error ) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}


// POST 요청 분석 -> 바디 파서
async function addLuxury(req, res) {
    const brand = req.body.brand;

    if (!brand) {
        res.status(400).send({error:'brand 누락'});
        return;
    }

    const founder = req.body.founder;
    const country = req.body.country;

    try {
        const result = await luxuryModel.addLuxury(brand, founder, country);
        res.send({msg:'success', data:result});
    }
    catch ( error ) {
        res.status(500).send(error.msg);
    }
}
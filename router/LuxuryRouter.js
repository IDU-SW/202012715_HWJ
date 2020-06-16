const luxuryModel = require('../model/LuxuryModel');
const express = require('express');
const router = express.Router();


// mapping
router.get('/', index); // index
router.get('/luxuries', showLuxuryList); // 전체 조회
router.get('/luxuries/:luxuryId', showLuxuryDetail); // 상세
router.get('/luxury/add', newLuxury); // 추가 페이지 이동
router.post('/luxuries', addLuxury); // 추가



// index
function index(req, res) {
    res.render('index');
}


// 전체 조회
async function showLuxuryList(req, res) {
    const luxuryList = await luxuryModel.getLuxuryList();
    console.log(luxuryList);
    res.render('showList', {title:'명품 리스트', luxury:luxuryList});
}


// 상세
async function showLuxuryDetail(req, res) {
    try {
        const luxuryId = req.params.luxuryId;
        const info = await luxuryModel.getLuxuryDetail(luxuryId);
        console.log(info);
        res.render("showDetail", {title:"상세 보기", luxury:info});
    }
    catch ( error ) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}


// 추가 페이지 이동
function newLuxury(req, res) {
    res.render('newLuxury');
}


// 추가
async function addLuxury(req, res) {
    const brand = req.body.brand;

    if (!brand) {
        res.status(400).send({error:'brand 누락'});
        return "redirect:/luxuries";
    }

    const founder = req.body.founder;
    const country = req.body.country;

    try {
        const result = await luxuryModel.addLuxury(brand, founder, country);
        const luxuryList = await luxuryModel.getLuxuryList();
        res.render('showList', {title:'명품 리스트', luxury:luxuryList});
    }
    catch ( error ) {
        res.status(500).send(error.msg);
        return "redirect:/luxuries";
    }

}


module.exports = router;
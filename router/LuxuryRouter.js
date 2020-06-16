const express = require('express');
const router = express.Router();
const luxuryModel = require('../model/LuxuryModel');
const luxuryList = luxuryModel.getLuxuryList();

// mapping
router.get('/', index); // index
router.get('/luxuries', showLuxuryList); // readAll
router.get('/luxuries/:luxuryId', showLuxuryDetail); // read
router.get('/luxury/add', newLuxury); // add-page
router.post('/luxuries', addLuxury); // add


// index
function index(req, res) {
    res.render('index');
}


// readAll
function showLuxuryList(req, res) {
    // const result = { data:luxuryList, count:luxuryList.length };
    res.render('showList', {title:'명품 리스트', luxury:luxuryList});
}


// read
function showLuxuryDetail(req, res) {
    try {
        const luxuryId = req.params.luxuryId;
        console.log('luxuryId : ', luxuryId);
        const info = luxuryModel.getLuxuryDetail(luxuryId);
        console.log('luxuryList : ', luxuryList)

        console.log('luxuryInfo : ', info)

        res.render("showDetail", {title:"상세 보기", luxury:info});
    }
    catch ( error ) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}


// add-page
function newLuxury(req, res) {
    console.log('new is here');
    res.render('newLuxury');
}


// add
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
        // res.send({msg:'success', data:result});
        res.render('showList', {title:'명품 리스트', luxury:luxuryList});
    }
    catch ( error ) {
        res.status(500).send(error.msg);
        return "redirect:/luxuries";
    }

}


module.exports = router;
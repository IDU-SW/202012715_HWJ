const luxuryModel = require('../model/LuxuryModel');
const express = require('express');
const LuxuryModel = require('../model/LuxuryModel');
const { func } = require('prop-types');
const router = express.Router();
var luxuryList;
const user = {
    id: 'aa',
    pw: '11'
}


// mapping
router.get('/', index); // index
router.get('/luxuries', showLuxuryList); // 전체 조회
router.get('/luxuries/:luxuryId', showLuxuryDetail); // 상세
router.get('/luxury/add', newLuxury); // 추가 페이지 이동
router.post('/luxuries', addLuxury); // 추가
router.post('/luxury/edit/:luxuryId', editLuxury); // 수정
router.get('/luxury/del/:luxuryId', delLuxury); // 삭제
router.get('/login', loginPage) // 로그인 페이지
router.post('/login', login) // 로그인
router.get('/logout', logout) // 로그아웃



// index
async function index(req, res) {
    luxuryList = await luxuryModel.getLuxuryList();
    const id = req.session.userid;
    if(id){
       res.render('index', { status: '로그인 상태'});
    } else{
        res.render('index', { status: '로그아웃 상태'});
    }
}


// 전체 조회
async function showLuxuryList(req, res) {
    res.render('showList', { title: '명품 리스트', luxury: luxuryList });
}


// 상세
async function showLuxuryDetail(req, res) {
    const id = req.session.userid;
    if (id) {
        try {
            let luxuryId = req.params.luxuryId;
            let info = await luxuryModel.getLuxuryDetail(luxuryId);
            console.log('info : ', info);
            res.render("showDetail", { title: "상세 보기", luxury: info });
        }
        catch (error) {
            res.status(error.code).send({ msg: error.msg });
        }
    } else {
        res.render('login');
    }
}


// 추가 페이지 이동
function newLuxury(req, res) {
    res.render('newLuxury');
}


// 추가
async function addLuxury(req, res) {
    let brand = req.body.brand;

    if (!brand) {
        res.status(400).send({ error: 'brand 누락' });
        return "redirect:/luxuries";
    }

    let founder = req.body.founder;
    let country = req.body.country;

    try {
        await luxuryModel.addLuxury(brand, founder, country);
        res.redirect('/');
    }
    catch (error) {
        res.status(500).send(error.msg);
    }

}

// 수정
async function editLuxury(req, res) {
    try {
        const luxuryId = req.body.luxury_id;
        const brand = req.body.brand;
        let founder = req.body.founder;
        let country = req.body.country;

        await luxuryModel.editLuxury(luxuryId, brand, founder, country);

        res.redirect('/');
    }
    catch (error) {
        console.log('Can not find, 404');
        res.status(500).send(error.msg);
    }
}

// 삭제
async function delLuxury(req, res) {
    try {
        let luxuryId = req.params.luxuryId;
        await LuxuryModel.delLuxury(luxuryId);
        res.redirect('/');
    }
    catch (error) {
        res.status(500).send(error.msg);
    }
}

// 로그인 페이지 이동
function loginPage(req, res) {
    res.render('login');
}

// 로그인
async function login(req, res) {
    const id = req.body.id;
    const pw = req.body.pw;

    if (id, pw === user.id, user.pw) {
        req.session.userid = id;
        res.redirect('/');
    }

    res.render('index');
}

// 로그아웃
async function logout(req, res) {
    req.session.destroy((error) => { });
    res.redirect('/');
}

module.exports = router;
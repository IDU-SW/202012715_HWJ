const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// json 데이터 파일 바디파서
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: false }));


// 라우터 설정
const luxuryRouter = require('./router/LuxuryRouter');
app.use(luxuryRouter);


// react 사용을 위한 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


module.exports = app;
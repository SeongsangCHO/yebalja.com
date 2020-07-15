var express = require('express');
var router = express.Router();
let db = require('../models/db_config');
const jwt = require('jsonwebtoken');
let secretObj = require('../config/jwt');

//로그인할 때 로그인 플래그를 같이 render로 넘겨준다.
//로그인 플래그에 맞추어 사용자 이메일을 띄워주는 박스를 보여준다 
//로그아웃버튼은 로그인플래그에 따라 출력된다. 
//로그아웃을 누르면, get방식으로 logout라우터를 요청하고 요청받은 이메일을 db쿼리문으로
//db내 존재하는 이메일을 찾아서 일치한다면, 토큰을 삭제하는 방식으로 진행
router.get('/', function(req, res, next){
    res.clearCookie('admin');
    res.redirect('/api/login');
})

module.exports =  router;
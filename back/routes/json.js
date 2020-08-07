var express = require('express');
var router = express.Router();

let db = require('../config/db_config');


router.get('/gisu', function(req, res, next) {
  db.query('SELECT * FROM gisu_table', (error, result)=>{
    if (error) throw error;
    console.log(result);
    res.json(result);
  })
});

router.get('/program', function(req, res, next){
  db.query('SELECT * FROM programs', (error, result)=>{
    if (error) throw error;
    res.json(result);
  })
})

router.get('/faq', function(req, res, next){
  let sql;
  sql = 'select  programs.title,  categories.title as category,  categories.eventkey as evnetKey,  subcategories.title as subCategory,   subcategories.link as href,  qnas.q , qnas.a from programs  inner join categories on programs.id = categories.programs_id inner join subcategories on categories.id = subcategories.categories_id inner join qnas on qnas.subcategories_id = subcategories.id';


   db.query(sql, (error, result)=>{
    if(error) throw error;
    console.log(result[0]);
    res.json(result);
  })
})



// reviews 컴포넌트에 들어갈 데이터 JSON형식으로 변환

router.get('/reviews', function(req, res, next){

  let sql;

  sql ="select replace(programs.link, '/', '') as program,  reviews.link,  reviews.title,  reviews.content,  reviews.post_date  from reviews  inner join programs on reviews.programs_id = programs.id";
  db.query(sql, (error, result) => {
    if (error) throw error;
    let obj = {};
    //데이터를 담을 객체 obj 생성
    result.map(v => { 
      //쿼리문 결과가 객체 배열, 이를 반복함.
     if (!(v.program in obj))
        obj[v.program] = [];        
        //객체에서 program이라는 키가 obj에 존재하지 않으면, 해당 키값에 대한 배열 생성
      obj[v.program].push(v);
      //program의 키값을 갖는 객체에 v객체 할당.
      delete v['program'];
      //program의 키는 사용하지 않으므로 삭제함.
    })
    console.log(obj);
     res.json(obj);
  })
})


router.get('/qnas', function(req, res, next){
  let sql;
  let getCategory = 'select distinct title as category from categories';
  sql = "select replace(programs.link, '/', '') as program,  categories.title as category,  categories.eventkey as eventKey,  subcategories.title as title,  subcategories.link as href, qnas.q , qnas.a from programs  inner join categories on programs.id = categories.programs_id inner join subcategories on categories.id = subcategories.categories_id  inner join qnas on qnas.subcategories_id = subcategories.id";
  // let category = [];
  // db.query(getCategory, (error, result) => {
  //   if(error) throw error;
  //   console.log(result);

  // })
  db.query(sql, (error, result) => {
    if(error) throw error;
    let obj = {};
    console.log(result[10].category);
    let qnas = [];
    result.map(v => {
      if (!(v.program in obj))
      {
        obj[v.program] = [];
      }
        // if (!(v.category in obj))
      obj[v.program].push(v);
      //   obj[v.program].subCategory = [];    //각 프로그램마다 3개의 객체 = 중복없이 객체 생성(카테고리값)
    //3개의 객체마다 서브카테고리안에 여러  title,href, qna를 가짐
    //qna속에 여러 q,a
     delete v['program'];
    })
    //program title 키 값을 이용해서 반복문 돌리기
    let programTitle = Object.keys(obj);
    programTitle.forEach(function(o){
      console.log(obj[o]);
    })
    res.json(obj);
  })
})
module.exports = router;

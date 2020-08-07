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
    let categoryTemp = [];
    let eventkeyTemp = [];
    result.map(v => {
      if (!(v.program in obj))
      {
        obj[v.program] = [];
      }
    categoryTemp.push(v.category);
    eventkeyTemp.push(v.evnetKey);
    //  obj[v.program].push(v);
    console.log(obj);
     delete v['program'];
    })
    //카테고리의 중복요소 제거
    let categoryArray = categoryTemp.filter((item, index) => categoryTemp.indexOf(item) === index);
    let eventkeyArray = eventkeyTemp.filter((item, index) => eventkeyTemp.indexOf(item) === index);

    console.log(categoryArray);
    let programTitle = Object.keys(obj);
    programTitle.forEach(function(o){
      categoryArray.forEach(function(key){
        obj[o].push({category : key});
       // obj[o].category = key;
      });
      // eventkeyArray.forEach(function(key){
      //   obj[o].push({evnetKey : key})
      // })
      //obj[o]에 각각 3개의 키를 갖는 3개의 객체를 쌓아야함.
      //category접근은 result[0].category
      //그럼 모든 result배열의 원소에서 중복없는 category값을 뽑아서 배열에 넣어보자
      console.log(obj[o]);

    })
    // let programTitle = Object.keys(obj);
    // programTitle.forEach(function(o){
    //   console.log(obj[o]);
    // })
    res.json(obj);
  })
})
router.get('/table', (req, res) => {
  db.query(`
    select json_object(
      'program', title,
      'link', link,
      'number_of_recruits', personnel,
      'edu_period', edu_period,
      'grant', benefit,
      'aptitude', badge_aptitude,
      'coding', badge_coding,
      'interview', badge_interview,
      'tryout', badge_tryout)
    from programs;`, (error, result) => {
      let arr = [];
      if (error) throw error;
      result.map((v) => {
        let parsed =JSON.parse(Object.values(v));
        console.log(parsed);
        //likelion은 테이블에 안쓰이므로 삭제
        if (parsed.link !== '/likelion'){
          arr.push(parsed);
        }
      })
    console.log(arr);
      res.json(arr);
  })
});

router.get('/timeline', (req, res) => {
  db.query(`
    select substring(link, 2), json_array((
      json_object(
        'heading', heading,
        'subheading', subheading
        )
    ))
    from programs;`, (error, result) => {
      if (error) throw result;
      let obj = {};
      result.map(v => {
        let dbString = Object.values(v)
        let key = dbString[0];
        let value = JSON.parse(dbString[1]);
        obj[key] = value;
      })
      // console.log('obj',obj);
      res.json(obj);
  })
})

router.get('/timelinelist', (req, res) => {
  db.query(`  select
    substring(link, 2) as 'program',
    edu,
    name,
    description,
    start_date as 'startdate',
    end_date as 'enddate'
    from steps_timelines
    inner join gisus on steps_timelines.gisus_id = gisus.id
    inner join programs on programs.id = gisus.programs_id;`, (error, result) => {
      if (error) throw error;
      let obj = {};
      result.map(v => {
        //각각의 프로그램이름들('ftseoul'등)이 obj에 없으면 obj['ftseoul']에 빈배열[]을 만듬
        if (!(v.program in obj)){
          obj[v.program] = [];
        }
        //만들어진 빈배열에 오브젝트 push
        obj[v.program].push(v);
        //'ftseoul'같은 프로그램 이름은 obj의 키값으로 적어줬기때문에 v에 있는 'ftseoul'은 삭제
        delete v['program']
      })
      // console.log(obj);
      res.json(obj);
  })
})

module.exports = router;


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


router.get('/reviews', function(req, res, next){

  let sql;

  sql ='select programs.title as program,  reviews.link,  reviews.title,  reviews.content,  reviews.post_date  from reviews  inner join programs on reviews.programs_id = programs.id';
  db.query(sql, (error, result) => {
    if (error) throw error;
    let obj = {};
    result.map(v => { 
     if (!(v.program in obj))
        obj[v.program] = [];        
      obj[v.program].push(v);
      delete v['program'];
      })
    console.log(obj)
     res.json(result);
  })
})
module.exports = router;

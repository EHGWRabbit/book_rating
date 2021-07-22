var express = require('express');
var router = express.Router();
var controller_main = require('../controllers/main')//main controller 


/*get homepage*/
router.get('/', controller_main.index)
/*анонимную функцию именуем*/
/*var homePageController = function(req, res){
  res.render('index', { title: 'Express' })
}*/
//олучаем домашнюю страницу
//router.get('/', homePageController)

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;

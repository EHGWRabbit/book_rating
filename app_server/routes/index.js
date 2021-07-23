var express = require('express');
var router = express.Router();
//var controller_main = require('../controllers/main')//main controller 
var controller_books = require('../controllers/books')
var controller_others = require('../controllers/others')


/*get pages*/
//router.get('/', controller_main.index)
router.get('/', controller_books.home_list)
router.get('/book', controller_books.book_info)
router.get('/book/review/new', controller_books.add_review)
/*others pages */
router.get('/about', controller_others.about)


module.exports = router;

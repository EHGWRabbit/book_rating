//get homepage
module.exports.home_list = function(req, res){
    res.render('book-list', { title: 'Главная' })
}

//get page information
module.exports.book_info = function(req, res){
    res.render('book-info', { title: 'Подробности' })
}


//get page review
module.exports.add_review = function(req, res){
    res.render('book-review-form', { title: 'Добавить отзыв'})
}
//получем домашнюю страницу
module.exports.index = function(req, res){//method exports index
    res.render('index', { title: 'Express' })//include code controllers homepage
}
//получем домашнюю страницу
module.exports.about = function(req, res){//method exports index
    res.render('generic-text', { title: 'About' })//include code controllers homepage
}
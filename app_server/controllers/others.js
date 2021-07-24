//получем домашнюю страницу
module.exports.about = function(req, res){//method exports index
    res.render('generic-text', { 
        title: 'О B-Rating',
        content: 'Приложение создано целиком и полностью на стеке MEAN.Это первое приложение автора на этом стеке, так что можно считать его как отправной точкой, так и стартом в освоении новых технологий'
     })//include code controllers homepage
}
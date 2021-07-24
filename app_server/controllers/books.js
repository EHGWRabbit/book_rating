//get homepage
module.exports.home_list = function(req, res){
    res.render('book-list', { 
        title: 'B-Rating -лучшее место для книг!',
        pageHeader:{
        title: 'B-Rating',
        strapline: 'Найди ту книгу, которая тебе по душе!'
    },
    sidebar: 'Воспользуйтесь нашим приложением и отыщите самую лучшую книгу',
    books: [{
            name: 'Властелин колец', 
            address: 'https://superbook.com',
            rating: 5,
            facilities: ['Фэнтези', 'Драма', 'Д.Толкин'],
            distance: 'Лучшая цена 1200р'

        },{
            name: 'Песнь льда и огня', 
            address: 'https://superbook.com',
            rating: 4,
            facilities: ['Фэнтези', 'Драма', 'Д.Мартин'],
            distance: 'Лучшая цена 1800р'

        },{
            name: 'Меч и радуга', 
            address: 'https://superbook.com',
            rating: 5,
            facilities: ['Фэнтези', 'Драма', 'М.Симмонс'],
            distance: 'Лучшая цена 900р'

        },{
            name: 'Гарри Поттер', 
            address: 'https://superbook.com',
            rating: 5,
            facilities: ['Фэнтези', 'Драма', 'Д.Роулинг'],
            distance: 'Лучшая цена 7200р'

        }]
    
});
};

//get page information
module.exports.book_info = function(req, res){
    res.render('book-info', { 
        title: 'Подробности', 
        pageHeader:{title: 'B-Rating'},
        sidebar: {
            //context: 'Приложение для поиска лучших книг и составления рейтингов! читатйте и отправляет отзывы о прочитанных книгах!',
            //callToAction:
            //'Если вы хотите, вы можете отсавить свой отзыв'
        },
        book:
            {
            name: 'Властелин колец',
            address: 'https://superbook.com',
            rating: 5,
            facilities: ['Фэнтези', 'Драма', 'Д.Р.Р.Толкин', 'Лучшая книга столетия'],
            images: 'inages/vk.jpeg, size=350X200'
        },
        reviews: [{
            author: 'Андрей',
            rating: 5,
            timestamp: '16 июля 2021',
            reviewText: 'Офигенная книга'
        },{
            author: 'Евгений',
            rating: 2, 
            timestamp: '12 июля 2021',
            reviewText: 'Так себе'
        }]
    });
};


//get page review
module.exports.add_review = function(req, res){
    res.render('book-review-form', { 
        title: 'Добавление отзыва на книгу',
        pageHeader: { title: 'Отзыв на Властелин колец'}
    });
};
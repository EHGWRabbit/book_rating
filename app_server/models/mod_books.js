var mongoose = require( 'mongoose' );

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createOn: {type: Date, "default": Date.now}
})
var bookSchema = new mongoose.Schema({ 
    name: {type: String, required: true},
    address: String,
    rating: {type: Number, "default": 0, min:0, max: 5},
    facilities: [String],
    reviews: [reviewSchema]
});

mongoose.model('Books', bookSchema);
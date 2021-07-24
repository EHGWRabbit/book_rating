var mongoose = require( 'mongoose' );


var dbURI = 'mongodb://localhost:3000';
mongoose.connect('mongodb://localhost:3000').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});



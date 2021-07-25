var mongoose = require( 'mongoose' );
var gracefulShutdown;
var dbURI = 'mongodb://localhost/B-Rating';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Connection: ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('disconnected');
});


gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Disconnected' + msg);
        callback();
    });
};

process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});

require('./mod_books');


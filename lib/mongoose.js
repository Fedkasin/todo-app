var mongoose = require('mongoose');
var config = require('../config/config');

mongoose.connect(config.db.hostname + config.db.dbname, {});

mongoose.connection.on('error', function(err) {
    console.error("Database Connection Error: " + err);
    process.exit(2);
});

mongoose.connection.on('connected', function() {
    console.info("Succesfully connected to MongoDB Database");
});


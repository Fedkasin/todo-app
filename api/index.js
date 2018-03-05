var express = require('express');
var router = express.Router();

/* GET default index page */
router.get('/', function (req, res, next) {
    return res.render('index');
});

module.exports = router;

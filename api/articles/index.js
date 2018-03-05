var express = require('express');
var router = express.Router();
var controller = require('./controllers/articles.controller');

/* GET articles listing. */
router.get('/', controller.getAllArticles);

/* UPDATE article by id. */
router.put('/:id', controller.updateArticleById);

/* CREATE article. */
router.post('/', controller.createArticle);

/* DELETE article by id. */
router.delete('/', controller.deleteArticleById);

module.exports = router;

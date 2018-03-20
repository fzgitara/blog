const express = require('express');
const router = express.Router();
const {getAllArticle, addArticle, editArticle, deleteArticle} = require('../controllers/articles')

router.get('/', getAllArticle)
router.post('/', addArticle)
router.put('/:_id', editArticle)
router.delete('/:_id', deleteArticle)

module.exports = router;

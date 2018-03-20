const Article = require('../models/articles')

module.exports = {
    getAllArticle (req, res) {
        Article.find()
        .then(articles => {
            res.status(200).json({
                message: 'List Article',
                articles
            })
        })
    },
    addArticle (req, res) {
        const article = new Article()
        
        article.title = req.body.title
        article.text = req.body.text
        console.log(req.body);
        article.save()
        .then(articleData => {
            res.status(201).json({
                message: 'New Article Added',
                articleData
            })
        })
        .catch(err => {
            res.status(400).json({
                message: 'Failed add new Article',
                err
            })
        })
    },
    editArticle (req, res) {
        Article.findByIdAndUpdate(
            {_id : req.params._id},
            {$set : req.body},
            {upsert : true},
            (err, r) => {
                if(err){
                    res.status(400).json({
                        message: 'Edit failed',
                        err
                    })
                } else {
                    res.status(201).json({
                        message: 'Edit successfull',
                        data: req.body
                    })
                }
            }
        )
    },
    deleteArticle (req, res) {
        Article.remove({_id : req.params.id})
        .then(article => {
            res.status(200).json({
                message: 'Delete successfull'
            })
        })
    }
}
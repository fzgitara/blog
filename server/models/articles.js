const mongoose = require('mongoose');

const Schema = mongoose.Schema

const articleSchema = new Schema({
    title : {
        type: String
    },
    text : {
        type: String
    }
}, {
    timestamp : true
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
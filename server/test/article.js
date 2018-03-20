const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = 'http://localhost:3000'

chai.use(chaiHttp)

describe('CRUD Article', () => {
    it('should list ALL ARTICLE on /articles GET', (done) => {
        chai.request(app)
        .get('/articles')
        .end((err, res) => {
            expect(res.status).to.equal(200)
            done()
        })
    })
    it('should add single article /articles POST', (done) => {
        chai.request(app)
        .post('/articles')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({
            title: 'Javascript',
            text: 'Test javascript'
        })
        .end((err, res) => {
            expect(res.body.articleData).to.have.property('title')
            expect(res.body.articleData).to.have.property('text')
            expect(res.body.articleData.title).to.be.a('string')
            expect(res.body.articleData.text).to.be.a('string')
            done()
        })
    })
    it('should update one article /articles/:articleId PUT', (done) => {
        chai.request(app)
        .put('/articles/5ab13b479432d124dc64bf1d')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({
            title: 'Update title',
            text: 'Update text'
        })
        .end((err, res) => {
            expect(res.status).to.equal(201)
            done()
        })
    })
    it('should delete one article /articles/:_id DELETE', (done) => {
        chai.request(app)
        .delete('/articles/5ab13e617d3ab9275cbe9dcf')
        .end((err, res) => {
            expect(res.status).to.equal(200)
            done()
        })
    })
})
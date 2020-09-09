const data = require('./mock/data')

module.exports = {
    devServer: {
        before(app) {
            app.get('/api/list', (req, res) => res.json(data.lisr))

            app.get('/api/filter', (req, res) => {
                let { val } = req.query;
                res.json(data.list.filter(item => item.title.includes(val)))
            })

            app.get('/api/getData', (req, res) => {
                let { id } = req.query;
                res.json(data.list.find(item => item.id === id))
            })
        }
    }
}
const Mock = require('mockjs')

module.exports = Mock.mock({
    "list|10-20": [{
        "title": "@ctitle(6)",
        "price|10-99": 1,
        "id": "@id",
        "url": "@image(150x150,@color)",
        "checked": false
    }]
})
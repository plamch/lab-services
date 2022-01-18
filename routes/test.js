var express = require('express')
var router = express.Router()

const nameList = { names: ['Vuctor', 'Danuel'] }

router.get('/', function (req, res) {
    res.json(nameList.names.map((name) => `Hello, ${name}`))
})

router.get('/greeting', function (req, res) {
    const { greet } = req.query
    res.send(nameList.names.map((name) => `${greet}, ${name}`).join('<br>'))
})

router.post('/', function (req, res) {
    res.send('Got a POST request at /test')
})

router.put('/', function (req, res) {
    res.send('Got a PUT request at /test')
})

module.exports = router

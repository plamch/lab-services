var express = require('express')
var router = express.Router()

const nameList = { names: ['Vuctor', 'Danuel'] }

router.get('/', (req, res) => res.json(nameList.names.map((name) => `Hello, ${name}`)))

router.get(
    '/greeting',
    (req, res, next) => {
        const { greet } = req.query

        req.greeting = nameList.names.map((name) => `${greet}, ${name}`).join('<br>')

        next()
    },
    (req, res, name) => res.send(req.greeting)
)

router.post('/', (req, res) => res.send('Got a POST request at /test'))

router.put('/', (req, res) => res.send('Got a PUT request at /test'))

module.exports = router

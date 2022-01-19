var express = require('express')
var router = express.Router()

const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

router.use(requestTime)

router.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small'
    res.send(responseText)
})

module.exports = router

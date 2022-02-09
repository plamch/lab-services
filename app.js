var express = require('express')
var cors = require('cors')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var testRouter = require('./routes/test')
var loggerRouter = require('./routes/logger')

var cookieValidator = require('./cookieValidator')

var app = express()

app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

async function validateCookies(req, res, next) {
    console.log(123)
    await cookieValidator(req.cookies)
    next()
}

app.use(validateCookies)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/test', testRouter)
app.use('/logger', loggerRouter)

// app.use((err, req, res, next) => res.status(400).send(err.message))

module.exports = { app }

#!/usr/bin/env node
"use strict"

/**
 * Module dependencies.
 */

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const debug = require('debug')('auditor:search')
const http = require('http')

const api = require('./routes/api')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', api)

app.get('/', (req, res, next) => {
  res.send("Search api to be implemented here")
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  let error = {}
  error.message = err.message
  error.error = err

  // render the error page
  res.status(err.status || 500)
  res.json({'error': error})
})

module.exports = app

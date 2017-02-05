const express = require('express')
const requests = require('superagent')
const router = express.Router()

/* Base API route */
router.get('/', (req, res, next) => {
  res.send('respond with api info')
})

router.get('/search', (req, res, next) => {
  if (req.query) {
    if (req.query.q) {
      requests.get('http://127.0.0.1:3001')
        .query( { q: req.query.q } )
        .end((error, response) => {
          if (error) {
            res.locals.message = error.message
            res.locals.error = req.app.get('env') === 'development' ? error : {}
            res.render("error")
          } else {
            res.send(response.text)
          }
        })
    } else {
      res.locals.message = "Invalid parameters"
      res.locals.error = {}
      res.render("error")
    }
  } else {
    res.send(JSON.stringify(req.query))
  }
})

module.exports = router

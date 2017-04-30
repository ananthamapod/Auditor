const express = require('express')
const router = express.Router()
const path = require('path')

/* GET api home, by default sends an API reference */
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'api_reference.json'))
})

router.get('/search', (req, res, next) => {
  // TODO: interfacing with elasticsearch and db for search query resolution
  let q = req.query.q
  res.send(`Searching for ${q}, search api to be implemented here`)
})

router.get('/status', (req, res, next) => {
  // TODO: figure out all the components of a microservice status
  res.json({
    status: "Running"
  })
})
module.exports = router

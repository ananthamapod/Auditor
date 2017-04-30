const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  // static react homepage currently
  res.render('index')
})

module.exports = router

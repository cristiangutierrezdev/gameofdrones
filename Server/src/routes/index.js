const express = require('express')
const router = express.Router()
const {Game, Player} = require('../models')

router.get("/",  (req, res) =>{
    res.send({message: "Server on"})
  })

module.exports = router
const mongoose = require('mongoose')
const config = require('../config')
const Game  = require('./Game')
const Player  = require('./Player')

const dbConnection = mongoose.connect(config.storageConfig.db, { useCreateIndex:true, useNewUrlParser: true }, (err) => {
    !err
      ? console.log('DB Connexion Success')
      : console.log('DB Connexion Fail')
  })

module.exports = {
    Game,
    Player,
    dbConnection
}
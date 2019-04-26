const { celebrate, Joi } = require('celebrate')

module.exports = {
    createPlayerValidator: celebrate({
        body: Joi.object().keys({
          name: Joi.string().required()
        })
      }),
    createGameValidator: celebrate({
        body: Joi.object().keys({
            player_one: Joi.string().required(),
            player_two: Joi.string().required(),
            rounds: Joi.array().required(),
            winner: Joi.string().required()
        })
      })
}
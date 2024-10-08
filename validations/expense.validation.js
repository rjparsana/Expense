const Joi = require("joi");

const addexpense = {
  body: Joi.object().keys({
    user: Joi.string().required(), 
    category: Joi.string().required(),
    amount: Joi.number().positive().required(), 
    paymentMethod: Joi.string().valid('cash', 'credit').required(),
    description: Joi.string().required(),
  }),
};

module.exports = {
  addexpense,
};


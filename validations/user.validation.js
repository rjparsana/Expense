const Joi = require("joi");

const addUser = {
  body: Joi.object().keys({
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    role: Joi.string().required().trim(),
  }),
};

module.exports = {
  addUser,
};

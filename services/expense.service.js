const { expenseSchema } = require("../models");

const addPayment = (body) => {
  return expenseSchema.create(body);
};
const getPayment = () => {
  return expenseSchema.find()

};
const deletePayment = (id) => {
  return expenseSchema.findByIdAndDelete(id);
};
const updatePayment = (id, body) => {
  return expenseSchema.findByIdAndUpdate(id, body);
};

module.exports = {
  addPayment,
  getPayment,
  deletePayment,
  updatePayment,
};
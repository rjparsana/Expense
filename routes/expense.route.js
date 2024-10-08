const express = require("express");
const validate = require("../middlewares/validate");
const { expenseController } = require("../controllers");
const expenseValidation = require("../validations/expense.validation");
const route = express.Router();

route.get("/get", expenseController.getexpense);
route.post("/add", validate(expenseValidation.addexpense), expenseController.addexpense);
route.put(
  "/update/:id",
  validate(expenseValidation.addexpense),
  expenseController.updateexpense
);
route.delete(
  "/delete/:id",
  expenseController.deleteexpense
);

module.exports = route;
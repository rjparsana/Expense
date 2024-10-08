const express = require('express');
const router = express.Router(); 
const userRoute = require("./user.route");
const expenseRoute=require("./expense.route")

router.use("/user", userRoute);
router.use("/expense", expenseRoute);

module.exports = router;

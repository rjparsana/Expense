const { expenseService } = require("../services");

// GET expense
const getexpense = async (req, res) => {
  const expense = await expenseService.getexpense();
  console.log(expense, "expense get");
  res.status(200).json({
    message: "expense get success",
    data: expense,
  });
};

// ADD expense
const addexpense = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const expense = await expenseService.addexpense(body);
    if (!expense) {
      throw new Error("somrthing went wrong");
    }
    res.status(201).json({
      message: "Pyment created success",
      data: expense,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// UPDATE expense

const updateexpense = async (req, res) => {
  try {
    const id = req.parms.id;
    const body = req.body;
    console.log(id, body);
    const expense = await expenseService.updateexpense(id, body);

    res.status(200).json({
      message: "expense updated success",
      data: expense,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// DELETE expense

const deleteexpense = async (req, res) => {
  try {
    console.log(req.parms);
    const id = req.parms.id;

    const expense = await expenseService.deleteexpense(id);
    if (!expense) {
      throw new Error("something went wrong");
    }
    res.status(200).json({
      message: "expense deleted success",
      data: expense,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addexpense,
  getexpense,
  updateexpense,
  deleteexpense,
};
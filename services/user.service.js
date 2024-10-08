const { userSchema } = require("../models");

const getUser = () => {
  return userSchema.find().populate("user");
};

const addUser = (body) => {
  return userSchema.create(body);
};

const deleteUser = (id) => {
  return userSchema.findByIdAndelete(id);
};

const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, { $set: body });
}


const getUserByEmail = (email) => {
  return userSchema.findOne({ email });
};

module.exports = {
  getUser,
  addUser,
  deleteUser,
  updateUser,
  getUserByEmail,
 
};

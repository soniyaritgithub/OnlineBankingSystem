const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({

  role: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  experience: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports =
  mongoose.model(
    "CareerApplication",
    careerSchema
  );
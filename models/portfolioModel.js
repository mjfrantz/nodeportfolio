const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A portfolio must have a title."],
    unique: true
  },
  description: {
    type: String
    // required: [true, 'A portfolio must have a description.']
  },
  summary: {
    type: String
    // required: [true, 'A portfolio must have a summary.']
  },
  githubLink: {
    type: String
  },
  websiteLink: {
    type: String
  },
  image: {
    type: String
    // required: [true, 'A portfolio must have a Landing Page Image.']
  },
  createdAt: {
    type: Date
  }
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;

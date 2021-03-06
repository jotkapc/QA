const mongoose = require('mongoose');

// Schema for storing answers

const answerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },
  uname: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  }
});

// Main Schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: false,
    default: 0
  },
  createdBy: {
    type: String,
    required: true,
    default: 'Unknown'
  },
  answers: {
    type: [answerSchema],
    required: false,
    default: []
  }
});

const Question = mongoose.model('question', questionSchema);

module.exports = Question;

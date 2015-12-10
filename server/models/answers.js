// Server Model

var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
	name: String,
	answer: String,
	details: String,
	questionId: String,
	likes: Number,
	date: { type: Date, default: Date.now }
});

mongoose.model('Answer', AnswerSchema);
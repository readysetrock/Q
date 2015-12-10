var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	question: String,
	description: String,
	answerCount: Number,
	date: { type: Date, default: Date.now }
});

mongoose.model('Question', QuestionSchema);
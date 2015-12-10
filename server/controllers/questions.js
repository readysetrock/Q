var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function() {
	return{
		show: function(request, response) {
			Question.find({}, function(err, results) {
				if(err) {
					console.log(err);
				}
				else{
					response.json(results);
				}
			});
		},
		add: function(request, response) {
			var question = new Question({question: request.body.question, description: request.body.description, answerCount: request.body.answerCount, date: request.body.date});
			question.save(question);
		},
		updateCount: function(request, response) {
			var id = request.body.questionId;
			var newCount = request.body.answerCount + 1;
			Question.findByIdAndUpdate(id, {answerCount: newCount}, function(err, results) {
				if(err) {
					console.log(err);
				}
				else{
					response.json(results);
				}
			});
		}
	}
})();
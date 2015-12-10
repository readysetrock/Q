// Server Controller

var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

module.exports = (function() {
	return{
		show: function(request, response) {
			Answer.find({}, function(err, results) {
				if(err) {
					console.log(err);
				}
				else{
					response.json(results);
				}
			});
		},
		add: function(request, response) {
			var answer = new Answer({name: request.body.name, answer: request.body.answer, details: request.body.details, questionId: request.body.questionId, likes: request.body.likes, date: request.body.date});
			answer.save(answer);
		},
		like: function(request, response) {
			var id = request.body._id;
			var newCount = request.body.likes + 1;
			Answer.findByIdAndUpdate(id, {likes: newCount}, function(err, results) {
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
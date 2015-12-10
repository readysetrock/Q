app.factory('questionsFactory', function($http) {
	var factory = {};
	var questions = [];
	var answers = [];

	factory.getQuestions = function(callback) {
		$http.get('/getQuestions').success(function(output) {
			questions = output;
			callback(questions);
		});
	}

	factory.addQuestion = function(info, callback) {
		$http.post('/addQuestion', info).success(function(output) {
			callback(questions);
		});
	}

	var currentQuestion;

	factory.currentQuestion = function(question, callback) {
		currentQuestion = question;
	}

	factory.showCurrent = function(callback) {
		callback(currentQuestion);
	}

	//---------------answers----------------------------

	factory.addAnswer = function(info, callback) {
		$http.post('/addAnswer', info).success(function(output) {
			callback(answers);
		});
	}

	factory.getAnswers = function(callback) {
		$http.get('/getAnswers').success(function(output) {
			answers = output;
			callback(answers);
		});
	}

	factory.like = function(info, callback) {
		$http.post('/like', info).success(function(output) {
			callback(answers);
		});
	}

	return factory;
})
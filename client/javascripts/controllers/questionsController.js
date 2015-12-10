app.controller('questionsController', function($scope, questionsFactory) {

	questionsFactory.getQuestions(function(data) {
		$scope.questions = data;
	});

	$scope.addQuestion = function() {
		$scope.newQuestion.answerCount = 0;
		$scope.newQuestion.date = Date.now();
		questionsFactory.addQuestion($scope.newQuestion, function() {
			questionsFactory.getQuestions(function(data) {
				$scope.questions = data;
			});
			$scope.newQuestion = {};
	    }); 
	}

	$scope.showQuestion = function(question) {
		questionsFactory.currentQuestion(question, function() {

		});
	}

	questionsFactory.showCurrent(function(data) {
		$scope.currentQuestion = data;
	});

	//------------------Answers----------------------

	$scope.addAnswer = function() {
		$scope.newAnswer.likes = 0;
		$scope.newAnswer.answerCount = $scope.currentQuestion.answerCount;
		$scope.newAnswer.questionId = $scope.currentQuestion._id;
		$scope.newAnswer.date = Date.now();
		questionsFactory.addAnswer($scope.newAnswer, function() {

		});
	}

	questionsFactory.getAnswers(function(data) {
		$scope.answers = data;
	});

	$scope.like = function(answer, question) {
		questionsFactory.like(answer, function() {
			questionsFactory.getAnswers(function(data) {
				$scope.answers = data;
			});
		});
	}

});
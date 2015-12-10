var app = angular.module('app', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl: 'partials/home.html'
			})
			.when('/addQuestion',{
				templateUrl: 'partials/addQuestion.html'
			})
			.when('/question',{
				templateUrl: 'partials/question.html'
			})
			.when('/answer',{
				templateUrl: 'partials/addAnswer.html'
			})
			.when('/loginReg',{
				templateUrl: 'partials/loginReg.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
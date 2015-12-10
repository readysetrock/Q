var questions = require('./../server/controllers/questions.js');
var answers = require('./../server/controllers/answers.js');

module.exports = function(app) {

	app.get('/getQuestions', function(request, response){
		questions.show(request, response);
	});

	app.post('/addQuestion', function(request, response){
		questions.add(request, response);
	});

	//-----------answers------------------------
	app.get('/getAnswers', function(request, response){
		answers.show(request, response);
	});

	app.post('/addAnswer', function(request, response){
		answers.add(request, response);
		questions.updateCount(request, response);
	});

	app.post('/like', function(request, response){
		answers.like(request, response);
	});

	app.get('/loginReg', function(request, response){
		signin.show(request,response);
	});
	app.post('/loginReg', function(request, response){
		signup.add(request,response);
	});

}
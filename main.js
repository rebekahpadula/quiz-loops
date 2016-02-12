var prompt = require('prompt-sync').prompt;

var correct = 0;

var start = Date.now();

var questions = [
	{
		message: 'What does REPL stand for?',
		answers: ['read eval print loop', 'recognize eval print loop'],
		correct: 'read eval print loop',
	},
	{
		message: 'What does CSS stand for?',
		answers: ['Creative Style Sheet', 'Cascading Style Sheet', 'Computer Style Sheet'],
		correct: 'Cascading Style Sheet',
	},
	{
		message: 'Which CSS property controls the text size?',
		answers: ['text-style', 'font-size', 'text-style', 'fontsize'],
		correct: 'font-size',
	},
	{
		message: 'In CSS how do you select an element called block with an id?',
		answers: ['#block', '.block', '*block'],
		correct: '#block',
	},
	{
		message: 'What is the default for the position property?',
		answers: ['Fixed', 'Static', 'Relative', 'Absolute'],
		correct: 'Static',
	},
	{
		message: 'In Javascript, which operator is used for assigning a value to a variable?',
		answers: ['*', '-', '=',],
		correct: '=',
	},
	{
		message: 'In Javascript, what does && stand for?',
		answers: ['or', 'and', 'increase by one'],
		correct: 'and',
	},
	{
		message: 'Screen, print, and all are what?',
		answers: ['Media Features', 'Media Queries', 'Media Types'],
		correct: 'Media Types',
	},
	{
		message: 'In Javascript, is the number 2 a:',
		answers: ['Variable', 'Assignment Expression', 'Literal value'],
		correct: 'Literal Value',
	},
	{
		message: 'What does HTML stand for?',
		answers: ['Hyperlinks and Text Markup', 'Hyper Text Markup Language'],
		correct: 'Hyper Text Markup Language',
	},
	{
		message: 'In HTML, which tag is used to display a picture?',
		answers: ['picture', 'image', 'img', 'src'],
		correct: 'img',
	},
	{
		message: 'Which tag lets you make a bulleted list?',
		answers: ['ol', 'ul', 'list'],
		correct: 'ul',
	},
	{
		message: 'Which tag lets you make a numbered list?',
		answers: ['ol', 'ul', 'list'],
		correct: 'ol'
	},
	{
		message: 'Choose the smallest heading:',
		answers: ['h2', 'h6', 'h1', 'h3'],
		correct: 'h6',
	},
	{
		message: 'Text within a strong tag is:',
		answers: ['bold', 'italic', 'indented'],
		correct: 'bold',
	}
];

var answer;

for (var i=0; i<questions.length; i++) {
	console.log(questions[i].message)

	var answers = '';

	for (var a = 0; a < questions[i].answers.length; a++) {
		answers = answers + questions[i].answers[a] + ', ';
	}

	console.log(answers);


	input = prompt()
	if (questions[i].correct.toLowerCase() === input.toLowerCase()) {
		console.log('Correct!');
		correct++
	}
	else {
		console.log('Your answer ' +input+' was incorrect. The correct answer is' + questions[i].correct)
	}
}
var stop = Date.now();
var time =((stop - start) / 1000/ 60);
console.log('You took ' + time +' to finish this quiz!');
console.log ('Your score is ' +correct);




var express = require('express');
var onExp = express();

var myMethod = require('./lib/myMeth.js');

var port = process.env.PORT || 8666;

onExp.get('/calc', function(request,response){
	let a = parseInt(request.query.a);	
	let b = parseInt(request.query.b);	
	
	console.log('a = ' + a);
	console.log('b = ' + b);
	console.log('ab = ' + (a*b));
	response.send('ab = (a=' +a+ ') * (b=' +b+ ') = ' +myMethod.multiplication(a,b));
})

onExp.listen(port, function () {
	console.log('Сервер запущен на порте '+port);
})
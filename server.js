var express = require('express');
var bodyParser = require('body-parser');
var user = require('./server-assets/user');
var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();

	if ('OPTIONS' == req.method) {
		res.send(200);
	}else{
		next();
	}
});


app.get('/', function sayHello(req, res){
	res.status(200).json({
		message: 'Stuff you can do:' +
			' GET /friends , ' +
			' POST /friends , and' +
			' GET /personalInfo'
	});
});

app.get('/friends', function(req, res){
	res.status(200).json({
		friends: user.getFriends()
	});
});

app.post('/friends', function(req,res){
	var friend = req.body;
	user.addFriend(friend);
	res.status(201).json({
		friend: friend
	})
});

app.get('/personalInfo', function(req, res){
	res.status(200).json({
		personalInfo: user.getPersonalInfo()
	});
});


app.listen(8765);
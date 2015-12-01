var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);


//sets the port to 3000
app.set('view engine', 'handlebars');
app.set('port', 3000 );

//access home page upon visiting the IP
app.get('/', function(req, res) {
	res.render('home');
});


//step one page
app.get('/step-one', function(req, res) {
	res.render('one');
});

//step two
//step one page
app.get('/step-two', function(req, res) {
	res.render('two');
});



//error handling borrowed from class examples
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

//listen to keep port open running scripts
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

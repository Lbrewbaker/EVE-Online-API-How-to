var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
app.use(express.static('public')); 


//require eveonlinejs
var eveonlinejs = require('eveonlinejs');
//set eveonlinejs params
eveonlinejs.setParams({
	
	//key for daniel barcelon
	keyID: '1020983',
	vCode: '8HNHqoltgfKEjZiIi2aln2zOtsu6vi4fpe7TpxhDWnX3RX9kJGruuMRpACNjreIK'
	
});

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

//step two page
app.get('/step-two', function(req, res) {
	res.render('two');
});


//step three page
app.get('/step-three', function(req, res) {
	var context;
	
	eveonlinejs.fetch('account:Characters', function(err, result){
		if(err) throw err
		
	
		context = result;
		console.log(context);  //this logs in the console 
		res.render('three', context);
		
	});
	//res.render('three');
});

//step four page
app.get('/step-four', function(req, res) {
	
	
	res.render('four');
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

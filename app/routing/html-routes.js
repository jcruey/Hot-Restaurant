//Dependencies
var path = require('path');


// Routes
// =============================================================

module.exports = function(app){

	
	// Basic route that sends the user first to the AJAX Page
	app.get('/', function(req, res){
		
		//res.send("Welcome to the Star Wars Page!")
		res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
	})

	app.get('/reserve', function(req, res){
		
		//res.send("Welcome to the Star Wars Page!")
		res.sendFile(path.join(__dirname, '..', 'public', 'reserve.html'));
	})

	app.get('/tables', function(req, res){
		
		//res.send("Welcome to the Star Wars Page!")
		res.sendFile(path.join(__dirname, '..', 'public', 'tables.html'));
	})

};



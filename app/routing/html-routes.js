// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');

var tableData 		= require('../data/table-data.js');
var waitListData 	= require('../data/waitinglist-data.js');




// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/tables', function(req, res){
		tableData.forEach(function(tables, index, array){ //for each item in the tables array you are added a number property
			tables.number = index + 1;
		});

		waitListData.forEach(function(waitList, index, array){
			waitList.number = index + 1;
		});

		res.render('tables', {tables: tableData,
							  waitList: waitListData});
	});

	app.get('/reserve', function(req, res){
		res.render('reserve');
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.render('home');

	});
}

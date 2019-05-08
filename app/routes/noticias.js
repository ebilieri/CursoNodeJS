module.exports = function(app){

	app.get('/noticias', function(req, res){

		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'node' ,
			password : 'node',
			database : 'portal_noticias',
			port : 3306
		});

		connection.query('select * from noticias', function(error, result){
			//res.send(result);
			res.render("noticias/noticias", {noticias : result});
		});				
	});
};
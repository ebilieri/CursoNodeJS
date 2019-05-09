var mysql = require('mysql');

module.exports = function(){

	return mysql.createConnection({
		host : 'localhost',
		user : 'node' ,
		password : 'node',
		database : 'portal_noticias',
		port : 3306
	});
}
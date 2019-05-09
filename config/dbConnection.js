var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexao com o db estabelecida');
	return mysql.createConnection({
		host : 'localhost',
		user : 'node' ,
		password : 'node',
		database : 'portal_noticias',
		port : 3306
	});
}
module.exports = function(){
	console.log('O autoload carregou o modulo de conecao com db');
	return connMySQL;
}
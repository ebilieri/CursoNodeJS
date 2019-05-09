module.exports = function(app){

	app.get('/noticia', function(req, res){
		
		connection = app.config.dbConnection();

		connection.query('select * from noticias where id_noticia = 2', function(error, result){
			//res.send(result);
			res.render("noticias/noticia", {noticia : result});
		});				
	});
	
};
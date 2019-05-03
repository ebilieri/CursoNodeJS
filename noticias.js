var http = require('http');

var server = http.createServer(function(req, res){
	res.end("<html><body>Portal de Notícias</body></html>");
});

server.listen(3000);
//console.log('Criando um site de noticias com Node.JS');
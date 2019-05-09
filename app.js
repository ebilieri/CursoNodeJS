// adicionar o modulo server.js
var app = require('./config/server');

// modulo teste
var msg = require('./mod_teste');


// inicia o servidor na porta 3000
app.listen(3000, function(){
	console.log("Servidor rodando com Express");
	console.log(msg());
});
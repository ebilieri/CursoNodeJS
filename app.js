// adicionar o modulo server.js
var app = require('./config/server');


// Adicionado os modulos de rotas
var rotaHome = require('./app/routes/home')(app);
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaFormInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);


// modulo teste
var msg = require('./mod_teste');



// inicia o servidor na porta 3000
app.listen(3000, function(){
	console.log("Servidor rodando com Express");
	console.log(msg());
});
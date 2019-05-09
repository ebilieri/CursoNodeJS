// Configurações do servidor de aplicação
var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

// mapeamento das rotas
consign()
.include('app/routes')
.then('config/dbConnection.js') // Obrigatorio informar a extensão
.then('app/models')
.into(app);


module.exports = app;
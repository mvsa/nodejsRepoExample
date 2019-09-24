const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
app.use(express.json()); //permite enviar dados para o app no formato de json
app.use(cors()); // posso delimitar quais dominios podem acessar tb

//Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true});
    //se tiver user e senha colocar user@password(apos as duas barras) /// nodeapi é o nome da database que quero fazer
requireDir('./src/models');  //com a adição de muitos é melhor usar o require-dir (ver Tip)   (vai puxar todos de models) 

//rota
app.use('/api', require('./src/routes'));  // a rota deve ter um api/algo.html

app.listen(3001);
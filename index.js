//IMPORTACIÓN DE LIBRERIAS NECESARIAS
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes'); //Como se llama index.js el nombre del archivo no se debe especificar
const generoRoutes = require('./routes/genero');

//SE CREA  LA APLICACIÓN
const app = express();

//DECODIFICA LO OBTENIDO EN UN FORMATO ESPECIFICADO
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', indexRoutes);
app.use('/genero', generoRoutes);
//SE CREA LA CONEXIÓN CON EL SERVIDOR. ES EL CONTROLADOR
app.get('/', (req, res) => {
  res.status(200).send({msg: 'Hola mundo'})
});

//SE CREA LA CONEXIÓN CON EL SERVIDOR. ES EL CONTROLADOR
app.post('/', (req, res) => {
  return res.status(200).send(req.body); // {}
});

//INICIAR LA APLICACIÓN
app.listen(3000, () =>{
  console.log('Servidor iniciado en el puerto 3000');
});

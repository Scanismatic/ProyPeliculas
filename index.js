//IMPORTACIÓN DE LIBRERIAS NECESARIAS
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes'); //Como se llama index.js el nombre del archivo no se debe especificar
const generoRoutes = require('./routes/genero');
const directorRoutes = require('./routes/director');
const peliculaRoutes = require('./routes/director');

//SE CREA  LA APLICACIÓN
const app = express();

//DECODIFICA LO OBTENIDO EN UN FORMATO ESPECIFICADO
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', indexRoutes);

//INICIALIZACIÓN DE TODAS LAS RUTAS
app.use('/genero', generoRoutes);
app.use('/director', directorRoutes);
app.use('/pelicula', peliculaRoutes);

//SE CREA LA CONEXIÓN CON EL SERVIDOR. ES EL CONTROLADOR
app.get('/', (req, res) => {
  res.status(200).send({msg: 'Servicio iniciado'})
});

//MANDA MENSAJE DE ERROR EN CASO DE NO ENCONTRAR LA RUTA
app.use((req, res, next) => {
  return res.status(404).send({msg: 'Ruta no encontrada.'});
});

//INICIAR LA APLICACIÓN
app.listen(3000, () =>{
  console.log('Servidor iniciado en el puerto 3000');
});

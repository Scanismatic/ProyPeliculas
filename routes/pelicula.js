'use strict';
const router = require('express').Router();
const controllers = require('../controllers/pelicula.js');

router.route('/')
  .get(peliculasController.get)
  .post(peliculasController.post);
router.route('/:idPelicula')
  .get(peliculasController.get)
  .put(peliculasController.put)
  .delete(peliculasController.delete);

module.exports = router;

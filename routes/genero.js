'use strict';
const router = require('express').Router();
const controller = require('../controllers/genero');

router.route('/')
  .get(controller.get)
  .post(controller.post);

router.route('/:idGenero') //TODO LO QUE EMPIECE POR ':' ES PARAMETRO
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;

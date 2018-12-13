'use strict';
const router = require('express').Router();
const controller = require('../controllers') //no se requere especificar el nombre del archivo por ser main.js

//SE CREA LA CONEXIÓN CON EL SERVIDOR. ES EL CONTROLADOR
router.route('/')
  .get(controller.get)
  .post(controller.post);

module.exports = router;

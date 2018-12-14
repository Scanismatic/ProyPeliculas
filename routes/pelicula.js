'use strict';
const router = require('express').Router();
const controllers = require('../controllers/pelicula.js');

router.route('/')
  .get(controllers.get);

module.exports = router;

'use strict';
const router = require('express').Router();
const controller = require('../controllers/director');

router.route('/')
  .get(controller.get)
  .post(controller.post);

router.route('/:idDirector')
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;

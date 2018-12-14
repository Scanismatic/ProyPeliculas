'use strict';
const models = require('../models');

module.exports = {
  get: async (req, res) => {
    const peliculas = await models.Pelicula.findAll({
      include: [models.Director, models.Genero]
    });
    return res.status(200).send(peliculas);
  }
};

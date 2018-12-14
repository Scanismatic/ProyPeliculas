'use strict';
const models = require('../models');

module.exports = {
    get: async (req, res) => {
    const where = {};
    if(req.params.idPelicula) {
      where.idPelicula = req.params.idPelicula;
    }

    const peliculas = await models.Pelicula.findAll({
      include: [models.Director, models.Genero],
      where: where
    });
    return res.status(200).send(peliculas);
  },
    post: async (req, res) => {
      try {
        const peliculas = await models.Pelicula.create(req.body);

        return res.status(201).send(pelicula);
      } catch (e) {
        return res.status(500).send({msg: 'No fue posible insertar el registro.'});
      }
    },
    put: async (req, res) => {
      try {
        let peliculas = await models.Pelicula.findById(req.params.idPelicula);

        if(!peliculas) {
          return res.status(404).send({msg: 'Registro no encontrado.'});
        }

        peliculas = await peliculas.update(req.body);
        return res.status(200).send(peliculas);
      } catch (e) {
        return res.status(500).send({msg: 'No fue posible actualizar el registro.'});
      }
    },
    delete: async (req, res) => {
      try {
        let peliculas = await models.Pelicula.findById(req.params.idPelicula);

        if(!peliculas) {
          return res.status(404).send({msg: 'Registro no encontrado.'});
        }

        peliculas = await peliculas.destroy();
        return res.status(200).send({msg: 'Registro eliminado con exito.'});
      } catch (e) {
        return res.status(500).send({msg: 'No fue posible eliminar el registro.'});
      }
    }
  };

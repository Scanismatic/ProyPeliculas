'use strict';
const models = require('../models');

module.exports = {
  get: async (req, res) => {
    const where = {};
    if(req.params.idDirector) {
      where.idDirector = req.params.idDirector;
    }

    const directores = await models.Director.findAll({
      include: [models.Pelicula],
      where: where
    });
    return res.status(200).send(directores);
  },
  post: async (req, res) => {
    try{
      const director = await models.Director.create(req.body);

      return res.status(200).send(director);
    } catch (e) {
      return res.status(500).send({msg: 'No fue posible insertar el registro.'});
    }
  },
  put: async (req, res) => {
    try{
      let director = await models.Director.findById(req.params.idDirector);

      if(!director){
        return res.status(404).send({msg: 'Registro no encontrado'});
      }

      director = await director.update(req.body);
      return res.status(200).send(director);
    } catch (e) {
      return res.status(500).send({msg: 'No fue posible actualizar el registro'});
    }
  },
  delete: async (req, res) => {
    try{
      let director = await models.Director.findById(req.params.idDirector);

      if(!director){
        return res.status(404).send({msg: 'Registro no encontrado'});
      }

      director = await director.destroy();
      return res.status(200).send({msg: 'Registro eliminado con exito'});
    } catch (e) {
      return res.status(500).send({msg: 'No fue posible eliminar el registro'});
    }
  }
};

//CONTROLADOR PARA EL METODO GET
'use strict';
const models = require('../models');

module.exports = {
  get: async (req, res) => {
    let generos;
    try {
      generos = await models.Genero.findAll();
    } catch (e) {
      return res.status(500).send({msg: 'Error en el servidor al mostrar generos'});
    }
    return res.status(200).send(generos);
  },
  post: async (req, res) => {
    try {
      //VALIDACIONES
      const genero = await models.Genero.create(req.body);
      return res.status(200).send(genero);
    } catch (e) {
      return res.status(500).send({msg: 'Error en el servidor al guardar generos.', error: e.parent.message});
    }
  },
  put: async (req, res) => {
    try{
      //1. OBTENER EL GENERO BASADO EN EL // ID
      let genero = await models.Genero.findById(req.params.idGenero);

      //2. VALIDA QUE EL GENERO EXISTA
      if(!genero){
        return res.status(404).send({msg: 'Genero no encontrado'});
      }
      //3. MODIFICA EL GENERO Y LO GUARDA
      genero = await genero.update(req.body);

      //4. RETORNA EL GENERO
      return res.status(200).send(genero);
    } catch (e){
      return res.status(500).send({msg: 'Error en el servidor al modificar', error: e.parent.message});
    }
  },
  delete: async (req, res) => {
    try{
      //1. OBTENER EL GENERO BASADO EN EL // ID
      let genero = await models.Genero.findById(req.params.idGenero);

      if(!genero){
        return res.status(404).send({msg: 'Genero no encontrado'});
      }
      //3. ELIMINA EL GENERO
      genero = await genero.destroy();

      //4. RETORNA EL MENSAJE
      return res.status(200).send({msg: 'Genero eliminado con exito'});
    } catch (e){
      return res.status(500).send({msg: 'Error en el servidor'});
    }
  }
};

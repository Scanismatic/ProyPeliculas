'use strict';

module.exports = {
  get: (req, res) => {
    return res.status(200).sent({msg: 'Hola mundo'});
  },
  post: (req, res) => {
    return res.status(200).send(req.body);
  }
};

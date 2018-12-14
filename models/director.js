'use strict';

module.exports = function(sequelize, DataType) {
  const Director = sequelize.define('Director', {
    idDirector: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_DIRECTOR'
    },
    nombre: {
      type: DataType.STRING,
      field: 'NOMBRE',
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'DIRECTORES'
  });

  Director.associate = function(models) {
    Director.hasMany(models.Pelicula, {foreignKey: 'idPelicula'});
  };

  return Director;
};

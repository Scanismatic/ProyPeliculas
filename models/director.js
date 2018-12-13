'use strict';

module.exports = function(sequelize, DataTypes){
  const Director = sequelize.define('Director', {
    idDirector: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_DIRECTOR'
    },
    nombre: {
      type: DataTypes.STRING,
      field: 'NOMBRE',
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'DIRECTORES'
  });

  Director.associate = function(models) {
    //Director.hasMany(models.Pelicula, {foreignKey: 'idPelicula'});
  };

  return Director;
};

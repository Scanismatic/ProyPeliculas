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
    paranoid: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'DIRECTORES'
  });

  Director.associate = function(models) {
     Director.hasMany(models.Pelicula, {foreignKey: 'idDirector', sourceKey: 'idDirector'});
  };

  return Director;
};

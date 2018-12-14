'use strict';

module.exports = function(sequelize, DataType) {
  const Genero = sequelize.define('Genero', {
    idGenero: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_GENERO'
    },
    nombre: {
      type: DataType.STRING,
      field: 'NOMBRE',
      allowNull: false
    },
  }, {
    timestamps: false,
    tableName: 'GENEROS'
  });
  Genero.associate = function(models) {
    Genero.hasMany(models.Pelicula, {foreignKey: 'idGenero', sourceKey: 'idGenero'});
  };
  return Genero;
}

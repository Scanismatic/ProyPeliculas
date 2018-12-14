'use strict';

module.exports = function(sequelize, DataType) {
  const Pelicula = sequelize.define('Pelicula', {
    idPelicula: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID_PELICULA',
    },
    titulo: {
      type: DataType.STRING,
      field: 'TITULO',
      allowNull: false
    },
    sinopsis: {
      type: DataType.STRING,
      field: 'SINOPSIS',
      allowNull: true
    },
    imagen: {
      type: DataType.STRING,
      field: 'IMAGEN',
      allowNull: true
    },
    anio: {
      type: DataType.INTEGER,
      field: 'ANIO',
      allowNull: false
    },
    idDirector: {
      type: DataType.INTEGER,
      field: 'ID_DIRECTOR',
      allowNull: false
    },
    idGenero: {
      type: DataType.INTEGER,
      field: 'ID_GENERO',
      allowNull: false
    }
  }, {
    timestamps: false,
    //paranoid: false,
    //underscored: true,
    //freezeTableName: true,
    tableName: 'PELICULAS'
  });

  Pelicula.associate = function(models) {
    Pelicula.belongsTo(models.Director, {foreignKey: 'idDirector'});
    Pelicula.belongsTo(models.Genero, {foreignKey: 'idGenero'});
  };

  return Pelicula;
};

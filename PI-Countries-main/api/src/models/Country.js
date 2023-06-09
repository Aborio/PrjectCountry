const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
//   // defino el modelo
sequelize.define('country', {
    
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      validate: {
        is: /^[A-Za-z]{3}$/ // Expresión regular para validar que el ID sea una cadena de tres letras
      }
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    poblation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};

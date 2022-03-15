const sequelize = require('../database/connection.js');
const { DataTypes, INTEGER, BOOLEAN } = require('sequelize');

const cardapioModel = sequelize.define('cardapio', {
    nomePrato: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    serve: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vegan: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = cardapioModel;
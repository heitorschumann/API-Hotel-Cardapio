const sequelize = require("../database/connection.js");
const { DataTypes, INTEGER, BOOLEAN } = require("sequelize");

const cardapioModel = sequelize.define("cardapio", {
	nomePrato: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	valor: {
		type: DataTypes.FLOAT,
		allowNull: false,
		validate: {
			isFloat: {
				msg: "Coloque um numero com virgula(ponto), se for inteiro coloque dois zeros depois da virgula",
			},
		},
	},
	serve: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			isInt: {
				msg: "Digite o numero de pessoas",
			},
		},
	},
	vegan: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	tipo: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isIn: {
				args: [["comida", "bebida"]],
				msg: "Escreva o tipo do alimento (comida/bebida)",
			},
		},
	},
});

module.exports = cardapioModel;

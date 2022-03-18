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
				msg: "O campo 'valor' deve receber um número decimal(se for inteiro colocar .00)",
			},
		},
	},
	serve: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			isInt: {
				msg: "O campo 'serve' deve receber um número (inteiro) de pessoas",
			},
		},
	},
	vegan: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isIn: {
				args: [["sim", "não"]],
				msg: "O campo 'vegan' deve receber uma string respondendo se o prato é vegan(sim/não)",
			},
		},
	},
	tipo: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			isIn: {
				args: [["comida", "bebida"]],
				msg: "O campo 'tipo' deve receber uma string respondendo o tipo do alimento (comida/bebida)",
			},
		},
	},
});

module.exports = cardapioModel;

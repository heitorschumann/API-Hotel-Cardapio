const CardapioModel = require("../model/cardapioModel.js");

async function seed() {
	await CardapioModel.bulkCreate([
		{
			nomePrato: "Salada de alface",
			valor: 20.5,
			serve: 2,
			vegan: "sim",
			tipo: "comida",
		},
		{
			nomePrato: "Cerveja IPA",
			valor: 16.3,
			serve: 1,
			vegan: "sim",
			tipo: "bebida",
		},
		{
			nomePrato: "Amendoim",
			valor: 5.12,
			serve: 1,
			vegan: "sim",
			tipo: "comida",
		},
		{
			nomePrato: "Lasanha à Bolonhesa",
			valor: 26,
			serve: 2,
			vegan: "não",
			tipo: "comida",
		},
	]);
}

module.exports = seed;

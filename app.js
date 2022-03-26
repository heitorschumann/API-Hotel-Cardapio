const express = require("express");
const connection = require("./src/database/connection.js");

const app = express();

const cardapioModel = require("./src/model/cardapioModel.js");

const rotas = require("./src/routes/rotas.js");

const seeder = require("./src/seeders/cardapioSeeders.js");

app.use(express.json());

app.use("/cardapio", rotas);

const port = process.env.PORT || 3333;

async function sincronizar() {
	try {
		await connection.sync();
		//await seeder();
		app.listen(port, () =>
			console.log(`Servidor rodando em http://localhost:${port}`)
		);
	} catch (err) {
		throw new Error(err);
	}
}

sincronizar();

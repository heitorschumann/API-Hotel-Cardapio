const { Sequelize } = require("sequelize");
require("dotenv-safe/config.js");
const sequelize = new Sequelize(process.env.DB_URL);

async function connect() {
	try {
		await sequelize.authenticate();
		console.log("Conectou com o Banco");
	} catch (error) {
		console.log("Deu ruim no Banco", error);
	}
}

connect();

module.exports = sequelize;

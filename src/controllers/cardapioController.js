const cardapioModel = require("../model/cardapioModel.js");

class cardapioController {
	static async registrar(req, res) {
		const { nomePrato, valor, serve, vegan, tipo } = req.body;

		if (!nomePrato || !valor || !serve || !vegan || !tipo) {
			return res
				.status(400)
				.json({ message: "todos os campos são obrigatórios" });
		}

		const pratoExiste = await testeModel.findOne({
			where: { nomePrato: nomePrato },
		});

		if (pratoExiste) {
			return res.status(400).json({ message: "prato já cadastrado" });
		}

		const novoPrato = {
			nomePrato,
			valor,
			serve,
			vegan,
			tipo,
		};

		try {
			await cardapioModel.create(novoPrato);
			return res.status(200).json({ message: "prato criado com sucesso" });
		} catch (error) {
			return res.status(400).json({ message: `Deu erro ${error}` });
		}
	}

	static async showAll(req, res) {
		try {
			const users = await cardapioModel.findAll();
			return res.status(200), json({ pratos: pratos });
		} catch (erro) {
			return res.status(400).json({ message: `Deu erro: ${erro}` });
		}
	}
}

module.exports = cardapioController;

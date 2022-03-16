//importa o model
const cardapioModel = require("../model/cardapioModel.js");

class cardapioController {
	static async registrar(req, res) {
		const { nomePrato, valor, serve, vegan, tipo } = req.body;

		if (!nomePrato || !valor || !serve || !vegan || !tipo) {
			return res
				.status(400)
				.json({ message: "todos os campos são obrigatórios" });
		}

		const pratoExiste = await cardapioModel.findOne({
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
			const pratos = await cardapioModel.findAll({
				attributes: { exclude: ["createdAt", "updatedAt"] },
			});
			return res.status(200).json({ cardapio: pratos });
		} catch (erro) {
			return res.status(400).json({ message: `Deu erro: ${erro}` });
		}
	}

	static async showById(req, res) {
		try {
			const id = req.params.id;
			const pratos = await cardapioModel.findOne({
				where: {
					id: id,
				},
			});

			if (!pratos) {
				return res.status(401).json({
					status: 401,
					message: "Prato não encontrado!",
				});
			}

			return res.status(200).json({ pratos: pratos });
		} catch (erro) {
			return res.status(400).json({ message: `Deu erro: ${erro}` });
		}
	}

	static async deleteById(req, res) {
		const id = req.params.id;

		const prato = await cardapioModel.findOne({ where: { id: id }, raw: true });

		if (!prato) {
			return res.status(401).json({
				status: 401,
				message: "Prato não encontrado!",
			});
		}

		try {
			await cardapioModel.destroy({ where: prato });
			return res
				.status(200)
				.json({ status: 200, message: "Prato deletado com sucesso!" });
		} catch (erro) {
			return res
				.status(401)
				.json({ status: 401, message: `Algo deu errado: ${erro}` });
		}
	}

	static async updateById(req, res) {
		const id = req.params;
		const { nomePrato, valor, serve, vegan, tipo } = req.body;

		const prato = await cardapioModel.findOne({ where: { id: id }, raw: true });

		if (!prato) {
			return res.status(401).json({
				status: 401,
				message: "Prato não encontrado!",
			});
		}

		const novosDados = {
			nomePrato,
			valor,
			serve,
			vegan,
			tipo,
		};

		try {
			await cardapioModel.update(novosDados, { where: prato });
			return res
				.status(200)
				.json({ status: 200, message: "Prato atualizado com sucesso" });
		} catch (erro) {
			return res.status(400).json({ message: `Algo deu errado: ${erro}` });
		}
	}
}

module.exports = cardapioController;

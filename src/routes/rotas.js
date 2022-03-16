const express = require("express");
const router = express.Router();

//importação do controller
const cardapioController = require("../controllers/cardapioController.js");

// A rota deve retornar um prato pelo seu numero de id
router.get("/:id", cardapioController.showById);

// A rota deve retornar todos os registros do banco
router.get("/", cardapioController.showAll);

// A rota deve registrar um novo prato
router.post("/registrar", cardapioController.registrar);

// A rota deve deletar um prato baseado em seu ID
router.delete("/:id", cardapioController.deleteById);

//A rota deve atualizar um registro do banco
router.patch("/:id", cardapioController.updateById);

module.exports = router;

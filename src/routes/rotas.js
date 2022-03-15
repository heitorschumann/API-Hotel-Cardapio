const express = require('express');
const router = express.Router();

//controller
const cardapioController = require('../controllers/cardapioController.js')

// A rota 
router.post('/registrar', cardapioController.registrar)
// Read
router.get('/', cardapioController.showAll)

module.exports = router;
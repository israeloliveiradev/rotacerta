const express = require('express');
const router = express.Router();
const entregaController = require('../controllers/entregaController');

router.get('/', entregaController.exibirFormulario);
router.post('/entrega', entregaController.cadastrarEntrega);
router.get('/listarEntregas', entregaController.buscarTodasEntregas);
router.get('/buscarEntrega', entregaController.buscarEntrega);
router.delete('/entrega/:id', entregaController.excluirEntrega);

module.exports = router;
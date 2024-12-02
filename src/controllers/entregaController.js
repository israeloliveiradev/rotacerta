const entregaService = require('../services/entregaService');

class EntregaController {
    async exibirFormulario(req, res) {
        res.render('formulario', { title: 'Cadastro e Busca de Entrega' });
    }

    async cadastrarEntrega(req, res) {
        try {
            console.log("Dados recebidos no formulário:", req.body);
            const { cliente, cep, numero } = req.body;

            if (!cliente) {
                throw new Error("Nome do cliente não foi informado.");
            }
            const entregaId = await entregaService.cadastrar(cliente, cep, numero);
            res.redirect(`/buscarEntrega?id=${entregaId}`);
        } catch (error) {
            console.error("Erro no cadastro de entrega:", error.message);
            res.status(400).render('formulario', { title: 'Cadastro de Entrega', error: error.message });
        }
    }

    async buscarTodasEntregas(req, res) {
        try {
            const entregas = await entregaService.buscarTodas();
            res.render('entregas', { title: 'Lista de Entregas', entregas });
        } catch (error) {
            res.status(500).render('entregas', { title: 'Lista de Entregas', error: error.message });
        }
    }

    async buscarEntrega(req, res) {
        try {
            const id = req.query.id;
            const entrega = await entregaService.buscarPorId(id);
            res.render('detalhesEntrega', { title: 'Detalhes da Entrega', entrega });
        } catch (error) {
            res.status(404).render('detalhesEntrega', { title: 'Detalhes da Entrega', error: error.message });
        }
    }

    async excluirEntrega(req, res) {
        try {
            const id = req.params.id;
            await entregaService.excluir(id);
            res.status(200).json({ message: 'Entrega excluída com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir entrega:', error);
            res.status(500).json({ error: 'Erro ao excluir entrega' });
        }
    }
}

module.exports = new EntregaController();
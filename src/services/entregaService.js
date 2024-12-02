const entregaRepository = require('../repositories/entregaRepository');
const axios = require('axios');
const Entrega = require('../models/entrega');

class EntregaService {
    async cadastrar(cliente, cep, numero) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            if (response.data.erro) {
                throw new Error('CEP não encontrado');
            }
            const { logradouro, bairro, localidade, uf, estado } = response.data;
            const entrega = new Entrega(null, cliente, cep, numero, logradouro, bairro, localidade, uf, estado);
            const id = await entregaRepository.salvar(entrega);
            entrega.id = id; 
            return id;
        } catch (error) {
            throw new Error('Erro ao cadastrar entrega: ' + error.message);
        }
    }

    async buscarTodas() {
        return await entregaRepository.buscarTodas();
    }

    async buscarPorId(id) {
        const entrega = await entregaRepository.buscarPorId(id);
        if (!entrega) {
            throw new Error('Entrega não encontrada');
        }
        return entrega;
    }

    async excluir(id) {
        await entregaRepository.excluir(id);
    }
}

module.exports = new EntregaService();
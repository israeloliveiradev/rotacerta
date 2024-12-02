const db = require('../config/firebaseConfig');
const Entrega = require('../models/entrega');

class EntregaRepository {
    async getNextId() {
        const snapshot = await db.ref('lastId').once('value');
        const lastId = snapshot.val() || 0;
        const nextId = lastId + 1;
        await db.ref('lastId').set(nextId);
        return nextId;
    }

    async salvar(entrega) {
        const id = await this.getNextId();
        entrega.id = id;
        await db.ref(`entregas/${id}`).set(entrega.toFirebase());
        console.log("Entrega salva com sucesso:", id);
        return id;
    }

    async buscarTodas() {
        const snapshot = await db.ref('entregas').once('value');
        return Object.entries(snapshot.val() || {}).map(([id, data]) =>
            Entrega.fromFirebase(id, data)
        );
    }

    async buscarPorId(id) {
        const snapshot = await db.ref(`entregas/${id}`).once('value');
        if (!snapshot.exists()) {
            return null;
        }
        return Entrega.fromFirebase(id, snapshot.val());
    }

    async excluir(id) {
        await db.ref(`entregas/${id}`).remove();
    }
}

module.exports = new EntregaRepository();
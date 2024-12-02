class Entrega {
    constructor(id, cliente, cep, numero, rua = '', bairro = '', cidade = '', estado = '') {
        this.id = id;
        this.cliente = cliente;
        this.cep = cep;
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    static fromFirebase(id, data) {
        return new Entrega(
            parseInt(id),
            data.cliente,
            data.cep,
            data.numero,
            data.rua,
            data.bairro,
            data.cidade,
            data.estado
        );
    }

    toFirebase() {
        return {
            cliente: this.cliente,
            cep: this.cep,
            numero: this.numero,
            rua: this.rua,
            bairro: this.bairro,
            cidade: this.cidade,
            estado: this.estado,
        };
    }
}

module.exports = Entrega;
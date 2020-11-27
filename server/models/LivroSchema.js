const mongoose = require ('mongoose');

const livro = new mongoose.Schema ({
    nome: {
        type: String,
        required: [true, "Campo obrigatório, digite o nome."]
    },
    Isbn: {
        type: String,
        unique: true,
        required: [true, "Campo obrigatório, digite o Isbn."]
    },
    preco:{
        type: Number,
        required: [true, "Campo obrigatório."]
    },
    criadoEm: { type: Date, default: Date.now },
})

module.exports = mongoose.model('livros', livro);
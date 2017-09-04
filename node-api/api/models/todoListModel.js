'use strict';

var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: 'Nome da tarefa é obrigatório!'
    },
    data_realizacao: {
        type: Date,
        default: Date.now,
        required: 'Data realização é obrigatório!'
    },
    data_cadastro: {
        type: Date,
        default: Date.now
    },
    status:{
        type: [{
            type: String,
            enum: ['Aguardando', 'Aprovado', 'Cancelado']
        }],
        default: ['Aguardando']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);
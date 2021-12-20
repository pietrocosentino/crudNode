'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        require: true,
        trim: true
    },
    descricao: {
        type: String,
        require: true,
        trim: true
    },
    active: {
        type: Boolean,
        require:true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true, 
        index: true, 
        unique: true
    },
    imagem: {
        type: String
    },
    endereco: [{
        logadouro: {
            type: String,
            require: true,
            trim: true
        },
        número: {
            type: Number,
            require: true,
            trim: true
        },
        cep: {
            type: String,
            require: true,
            trim: true
        },
        bairro: {
            type: String,
            require: true,
            trim: true
        },
        cidade: {
            type: String,
            require: true,
            trim: true
        },
        estado: {
            type: String,
            require: true,
            trim: true
        },
        país: {
            type: String,
            require: true,
            trim: true
        },
        complemento: {
            type: String,
            trim: true
        }}],
    tags: [{
        type: String,
        require: true
    }]
});

module.exports = mongoose.model('Room', schema);
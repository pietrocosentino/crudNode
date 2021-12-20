    'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    período: [{
        manhã: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        },
        tarde: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        },
        noite: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        }}],
    estado: [{
        disponível: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        },
        indisponível: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
        },
        reservado: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Room'
    }}],

});

module.exports = mongoose.model('Shedule', schema);
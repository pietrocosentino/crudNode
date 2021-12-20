'use strict';
const mongoose = require('mongoose');
const Room = mongoose.model('Room');

exports.get = async() => {
    const res = await Room.find({
        active: true
    }, 'nome endereço descrição slug');
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Room
        .findOne({
            slug: slug,
            active: true
        }, 'nome endereço descrição slug tags');
    return res;
}

exports.getById = async(id) => {
    const res = await Room
        .findById(id);
    return res;
}

exports.getByTag = async(tag) => {
    const res = Room
        .find({
            tags: tag,
            active: true
        }, 'nome endereço descrição slug tags');
    return res;
}

exports.create = async(data) => {
    var room = new Room(data);
    await room.save();
}

exports.update = async(id, data) => {
    await Room
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                descrição: data.descrição,
                endereço: data.endereço,
                slug: data.slug
            }
        });
}

exports.delete = async(id) => {
    await Room
        .findOneAndRemove(id);
}
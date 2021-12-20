'use strict';
const mongoose = require('mongoose');
const Schedule = mongoose.model('Schedule');

exports.get = async(data) => {
    var res = await Schedule
        .find({}, 'nome estado user periodo')
        .populate('user', 'name')
        .populate('nome.room', 'nome');
    return res;
}

exports.create = async(data) => {
    var schedule = new Schedule(data);
    await schedule.save();
}
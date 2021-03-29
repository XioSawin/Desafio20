const mongoose = require('mongoose');

const mensajesCollection = 'mensajes';

const MensajesSchema = new mongoose.Schema({
    email: {type: String, require: true, max: 100},
    message: {type: String, require: true, max: 100}
})

module.exports = mongoose.model(mensajesCollection, MensajesSchema);
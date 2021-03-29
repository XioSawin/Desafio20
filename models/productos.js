const mongoose = require('mongoose');

const productosCollection = 'productos';

const ProductosSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    precio: {type: Number, require: true},
    stock: {type: Number, require: true}
})

module.exports = mongoose.model(productosCollection, ProductosSchema);
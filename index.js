const mongoose = require('mongoose');
const express = require('express');
const app = express();

const productoModel = require('./models/productos');
const mensajeModel = require('./models/mensajes');

app.use(express.json());


/* ----------------------- ROUTES MESSAGES ----------------------- */
    //CREATE MESSAGE
app.post('/mensajes', (req, res) => {
    const mensaje = req.body;

    const messageSaved = new mensajeModel(mensaje);
    messageSaved.save()
        .then( () => res.sendStatus(201) )
        .catch( (err) => res.send(err))
})

    //READ MESSAGES
app.get('/mensajes', (req, res) => {
    mensajeModel.find( {} )
        .then((mensajes) => res.send(mensajes))
        .catch((err) => res.send(err))
})

/* ----------------------- ROUTES PRODUCTS ----------------------- */
    //CREATE PRODUCT
app.post('/productos', (req, res) => {
    const producto = req.body;

    const productSaved = new productoModel(producto);
    productSaved.save()
        .then( () => res.sendStatus(201) )
        .catch( (err) => res.send(err))
})

    //READ ALL PRODUCTS
app.get('/productos', (req, res) => {
    productSaved.find( {} )
        .then((productos) => res.send(productos))
        .catch((err) => res.send(err))
})

    // UPDATE BY PRODUCT NAME
app.put('/productos/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const precio = req.body.precio;

    productSaved.updateOne({nombre: nombre}, {
        $set: {precio: precio}
    })
        .then((updatedProduct) => res.send(updatedProduct))
        .catch((err) => res.send(err))
})

    //READ BY PRODUCT TITLE
app.get('/productos/:nombre', (req, res) => {
    const nombre = req.params.nombre;

    userModel.findOne( {nombre: nombre} )
        .then((producto) => res.send(producto))
        .catch((err) => res.send(err))
})

    //DELETE BY PRODUCT TITLE
app.delete('/productos/:nombre', (req, res) => {
    const nombre = req.params.nombre;

    userModel.deleteOne( {nombre: nombre} )
        .then(() => res.sendStatus(200))
        .catch((err) => res.send(err))
})


/* ----------------------- SERVER + DB CONNECTION ----------------------- */

app.listen(3040, () => {
    mongoose.connect('mongodb://localhost:27017/ecommerce', 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    )
        .then( () => console.log('Base de datos conectada') )
        .catch( (err) => console.log(error) ); 
})
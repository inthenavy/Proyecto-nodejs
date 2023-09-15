//const productos = require('../data/productos.json');
require('dotenv').config()
const db = require('../models/connection.js')

const indexGET = (req, res) => {

    let sql = "SELECT * FROM productos WHERE destacado = 1"
    db.query(sql, (err, data) => {
        if (err) throw err
            res.render('index', {
        titulo: "Mi página web", 
        productos: data
    })
    })

}

const comoComprarGET = (req, res) => {
    res.render('como-comprar', {
        titulo: "Cómo comprar"
    })
}

const contactoGET = (req, res) => {
    res.render('contacto', {
        titulo: "Contacto"
    })
}

const detalleProductoGET = (req, res) => {
    res.render('detalle-producto', {
        titulo: "Detalle del Producto"
    })
}

const sobreNosotrosGET = (req, res) => {
    res.render('sobre-nosotros', {
        titulo: "Sobre Nosotros"
    })
}

module.exports = {
    indexGET,
    comoComprarGET,
    contactoGET, 
    detalleProductoGET,
    sobreNosotrosGET,
}
const productos = require('../data/productos.json');

const indexGET = (req, res) => {
    //(indica el nombre del archivo hbs, indica el objeto)
    res.render('index',{
        titulo: "Mi página web", 
        productos: productos[0].data
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
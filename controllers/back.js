const productos = require('../data/productos.json');

const adminGET = (req, res) => {
    res.render('admin',{
        titulo: "Panel de Control",
        productos: productos[0].data
    })
  }

const agregarProductoGET = (req, res) => {
    console.log("Estás en agregar producto");
    res.render('agregar-producto',{
    })
  }

const editarGET = (req, res) => {
    console.log("Estás en editar-producto");
    res.render('editar-producto',{
    })
  }

  const loginGET = (req, res) => {
    console.log("Estás en login");
    res.render('login',{
    })
  }

  module.exports = {
    adminGET,
    agregarProductoGET,
    editarGET,
    loginGET,
  }
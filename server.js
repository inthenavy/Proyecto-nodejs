const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const productos = require('./data/productos.json');

const port = 3000

app.set('view engine', 'hbs'); //indica que usaremos la plantilla "handlebars"
app.set('views', [
    path.join('./views/front'),
    path.join('./views/back'),
    path.join('./views'),
  ])
hbs.registerPartials(__dirname + '/views/partials'); //indicamos el directorio hacia los parciales

app.use(express.static('public')); //indica la carpeta public para considerar archivos estáticos

app.get('/', (req, res) => {
    //(indica el nombre del archivo hbs, indica el objeto)
    res.render('index',{
        titulo: "Mi página web", 
        productos: productos[0].data
    })
})

app.get('/como-comprar', (req, res) => {
    res.render('como-comprar', {
        titulo: "Cómo comprar"
    })
})

app.get('/contacto', (req, res) => {
    res.render('contacto', {
        titulo: "Contacto"
    })
})

app.get('./detalle-producto', (req, res) => {
    res.render('detalle-producto', {
        titulo: "Detalle del Producto"
    })
})

app.get('/sobre-nosotros', (req, res) => {
    res.render('sobre-nosotros', {
        titulo: "Sobre Nosotros"
    })
})

//RUTAS BACK
app.get('/admin', (req, res) => {
    res.render('admin',{
        titulo: "Panel de Control",
        productos: productos[0].data
    })
  })
  
  app.get('/agregar-producto', (req, res) => {
    console.log("Estás en agregar producto");
    res.render('agregar-producto',{
    })
  })
  
  app.get('/editar-producto', (req, res) => {
    console.log("Estás en editar-producto");
    res.render('editar-producto',{
    })
  })
  
  app.get('/login', (req, res) => {
    console.log("Estás en login");
    res.render('login',{
    })
  })
  
  app.use((req, res, next) => {
    res.status(404).render('404',{
      titulo: "404 - No Encontrado"
    })
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
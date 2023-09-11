const express = require('express')
const app = express()
const hbs = require('hbs');

const port = 3000

app.set('view engine', 'hbs'); //indica que usaremos la plantilla "handlebars"
hbs.registerPartials(__dirname + '/views/partials'); //indicamos el directorio hacia los parciales

app.use(express.static(public)); //indica la carpeta public para considerar archivos estáticos

app.get('/', (req, res) => {

    //(indica el nombre del archivo hbs, indica el objeto)
    res.render('index',{
        titulo: "Mi página web"
    })
})


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})
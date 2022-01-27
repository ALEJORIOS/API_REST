const express = require('express');
const app = express();
const morgan = require('morgan');
var data = require('./data.js');

// Settings
app.set('port', 3000)

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    next();
})

app.get('/contenedores', (req, res) => {
    res.send(data.contenedores);
})

app.get('/info/contenedores', (req, res) => {
    res.send(data.infoContenedores)
})
app.get('/info/cliente', (req, res) => {
    res.send(data.clientes)
})

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ',app.get('port'))
})
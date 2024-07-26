const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

conectarBD();
app.use(cors());
app.use(express.json());

//rutas

app.use('/api/tareas', require('../routes/RoutesTareas'));
app.use('/api/clientes', require('../routes/RoutesCliente'));
app.use('/api/libros', require('../routes/RoutesLibro'));

//verificacion

app.get('/', (req, res) =>{
    res.send("hola mundo");
});

app.listen(port, () =>{
    console.log('El servidor esta conectado http://localhost:5000')
})
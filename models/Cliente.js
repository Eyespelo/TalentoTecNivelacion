const mongoose = require('mongoose');

//este modelo debe ser igual a lo que tenga la bd(Base de datos)

const clienteSchema = mongoose.Schema({
    
    nombres: {
        type:String,
        require: true
    },
    apellidos: {
        type:String,
        require: true
    },
    cedula: {
        type: Number,
        require: true
    },
    correo: {
        type:String,
        require: true
    },
    telefono: {
        type:Number,
        require: true
    },
    direccion: {
        type:String,
        require: true
    }

},{versionkey: false});

module.exports = mongoose.model('Cliente', clienteSchema);
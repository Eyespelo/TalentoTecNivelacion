const mongoose = require("mongoose");

const tareaSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },
    responsable:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
}, {versionkey:false});

module.exports = mongoose.model('Tarea', tareaSchema);

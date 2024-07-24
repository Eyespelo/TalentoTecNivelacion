const Tarea = require('../models/Tarea');
exports.agregarTareas = async (req,res) => {

    try {
        
        let tareas = new Tarea(req.body);
        await tareas.save();
        res.json(tareas);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error al agregar una tarea");
    }
}

exports.monstrarTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error al monstrar las tareas");
    }
}

exports.actualizarTareas = async (req, res) => {
    try {
        const tareas = await Tarea.findOneAndUpdate(
            {_id: req.params.id}, req.body
        );
        if (!tareas){
            res.status(500).send("Hubo un erro al consultar la tarea")
        }else{
            res.json(tareas);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error al actualizar la tarea");

    }
}

exports.monstrarTarea = async (req, res) => {
    try {
        let tareas = await Tarea.findById(req.params.id);
        
        if(!tareas){
            res.status(404).json({msg: "no se encontro este ID"});
        }

        res.send(tareas);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error al buscar el ID");

    }
}
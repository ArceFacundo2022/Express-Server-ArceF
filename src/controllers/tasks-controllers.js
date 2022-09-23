const taskModel = require('../models/tasks')

const ctrlTasks = {}

ctrlTasks.getTasks = async (req, res) => {
    const tasks = await taskModel.find({ active : true });
    res.json(tasks)
}

ctrlTasks.postTasks = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { titulo, descripcion, estado } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newTask = new taskModel({
        titulo,
        descripcion,
        estado
    });

    // Se almacena en la base de datos con método asícrono .save()
    const task = await newTask.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    return res.json({
        msg: 'Tarea creada correctamente',
        task
    });
};

ctrlTasks.putTasks = async (req, res) => {
    const id = req.params.id;
    const { titulo, descripcion, estado, ...otroDatos } = req.body;

    if (!id || !descripcion || !titulo || !estado) {
        return res.status(400).json({
            msg: 'Peticion no valida',
        });
    };

    try {
        const oldTasks = await taskModel.find({_id: id})
        await taskModel.findByIdAndUpdate(id, { titulo, descripcion, estado })
        const updateTasks = await taskModel.find({_id: id})

        return res.send({
            msg: 'Tarea anticuada',
            oldTasks, 
            msg2: 'Tarea actualizada',
            updateTasks
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Error al actualizar la tarea',
        })
    }
};

ctrlTasks.ocultarTasks = async (req, res) => {
    const id = req.params.id;

    try {
        await taskModel.findByIdAndUpdate(id, { active: false })
        return res.json('Tarea oculta perfectamente');
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al ocultar la tarea'
        });
    }
};

ctrlTasks.deleteTasks = async (req,res) => {
    const id = req.params.id;
    try {
        await taskModel.findByIdAndDelete(id)
        return res.json('Tarea eliminada correctamente');
    } catch (err){
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea'
        });
    }
}


module.exports = ctrlTasks;
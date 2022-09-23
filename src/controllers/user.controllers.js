const UserModel = require('../models/user')

const ctrlUser = {}

ctrlUser.getUser = (req, res) => {
    res.send({
        "menssaje":`Bienvenido GATO`
    })
}

ctrlUser.postUser = (req, res) => {
    const {name, password, email} = req.body;
    res.send({
        name,
        password,
        email
    })
}

// Controlador para crear nuevo usuario en la Base de Datos.
ctrlUser.postSave = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { username, password, email } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newUser = new UserModel({
        username,
        password,
        email
    });

    // Se almacena en la base de datos con método asícrono .save()
    const user = await newUser.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    return res.json({
        msg: 'Usuario creado correctamente',
        user
    });
};

module.exports = ctrlUser;
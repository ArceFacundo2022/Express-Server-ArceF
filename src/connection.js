const mangosta = require('mongoose');


const conectarDB = async () => {
    try{
        mangosta.connect( 'mongodb://127.0.0.1:27017/Pruebadb',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Conexion con la base de datos`)
    }catch(error){ 
        console.log(`Error al conectar con la base de datos`);
        console.log(error.message)
    }
}

module.exports = conectarDB;
const mongoose = require('mongoose');
const config = require('@jwt/config')
const { getLogger, terminate } = require('@jwt/utils')
const log = getLogger(__dirname, __filename)

mongoose.Promise = global.Promise;

// En la consola escribir comando export MONGODB_URL="mongodb://localhost:27017/auth"

if (!config.db) 
{
    log.error('Revisar variable MONGODB_URL')
    process.exit(1)
}

mongoose.connect(config.db, { useNewUrlParser: true })
    .then(function() 
    {
        log.info('Conexión correcta a la base de datos.');
    })
    .catch(function(err) 
    {
        log.error('Error en conexión a la base de datos.');
        log.error(err.message);
    });

module.exports = mongoose.connection;
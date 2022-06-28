const UsuarioRoute = require('./UsuarioRoute');
const TaskRoute = require('./TaskRoute');


module.exports = (app) => {
    UsuarioRoute(app), 
    TaskRoute(app)
}

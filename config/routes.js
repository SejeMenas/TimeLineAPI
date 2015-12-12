
var routes = function(app, config) {
  var PartidoController = require('../controllers/partidoController.js')

  var partidoController = new PartidoController(config)

  app.get('/partidos', partidoController.getPartidos)
}

module.exports = routes

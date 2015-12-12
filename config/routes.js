
var routes = function(app, config) {
  var PartidoController = require('../controllers/partidoController.js')
  var EstadoController = require('../controllers/estadoController.js')  
  var CandidatoController = require('../controllers/candidatoController.js')
    
  var partidoController = new PartidoController(config)
  var estadoController = new EstadoController(config)
  var candidatoController = new CandidatoController(config)
  
  app.get('/partidos', partidoController.getPartidos)
  
  app.get('/estados', estadoController.getEstados)

  app.get('/candidatos', candidatoController.getCandidatos)
}

module.exports = routes

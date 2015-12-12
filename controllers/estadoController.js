var TransparenciaBR = require('../libs/transparenciaBR.js')

var EstadoController = function(config) {

  this.getEstados = function(req, res, next) {
    var est = new TransparenciaBR(config)

    est.getEstados(function(err, response, body) {
      if (err) return next(err)

      res.send(body)
    })
  }
}

module.exports = EstadoController

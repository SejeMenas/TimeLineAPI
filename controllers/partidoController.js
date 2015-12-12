var TransparenciaBR = require('../libs/transparenciaBR.js')

var PartidoController = function(config) {

  this.getPartidos = function(req, res, next) {
    var tbr = new TransparenciaBR(config)

    tbr.getPartidos(function(err, response, body) {
      if (err) return next(err)

      res.send(body)
    })
  }
}

module.exports = PartidoController

var TransparenciaBR = require('../libs/transparenciaBR.js')

var CandidatoController = function(config) {

  this.listaCandidatos = function(req, res, next) {
    var cand = new TransparenciaBR(config)
    var options = req.query;

    cand.listaCandidatos(options, function(err, response, body) {
      if (err) return next(err)
      res.send(body)
    })
  }

  this.getCandidato = function(req, res, next) {
    var cand = new TransparenciaBR(config)
    var id = req.params.id

    var options = {
      id: id
    }

    cand.getCandidato(options, function(err, response, body) {
      if (err) return next(err)
      res.send(body)
    })
  }
}

module.exports = CandidatoController

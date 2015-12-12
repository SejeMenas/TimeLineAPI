var TransparenciaBR = require('../libs/transparenciaBR.js')
 
var CandidatoController = function(config) {

  this.getCandidatos = function(req, res, next) {
    var cand = new TransparenciaBR(config)
    var options = req.query;
    
    cand.getCandidatos(options, function(err, response, body) {
      if (err) return next(err)
      
      res.send(body)
    })
  }
}
 
module.exports = CandidatoController
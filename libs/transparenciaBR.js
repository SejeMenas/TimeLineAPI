var request = require('request')

var TransparenciaBR = function(config) {
  this.config = config
  this.api = 'http://api.transparencia.org.br/api/v1'
}

TransparenciaBR.prototype.getPartidos = function(callback) {
  var endpoint = '/partidos'

  var options = {
    url: this.api + endpoint,
    headers: {
      'App-Token': this.config.transApi.appToken
    }
  }

  request(options, callback)
}


module.exports = TransparenciaBR

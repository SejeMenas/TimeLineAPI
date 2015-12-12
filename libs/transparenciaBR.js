var request = require('request')

var TransparenciaBR = function(config) {
  this.config = config
  
  this.api = 'http://api.transparencia.org.br/api/v1'

	this.consumerAPI = function (endpoint, callback){
	  
	  var options = {
      url: this.api + endpoint,
      headers: {
        'App-Token': config.transApi.appToken
      }
	  }
    
    console.log(config)

	  request(options, callback)  
  }
}

TransparenciaBR.prototype.getPartidos = function(callback) {
	this.consumerAPI("/partidos", callback)
}

TransparenciaBR.prototype.getEstados = function(callback) {
	this.consumerAPI("/estados", callback)
}

TransparenciaBR.prototype.getCandidatos = function(callback) {
	this.consumerAPI("/candidatos", callback)
}

module.exports = TransparenciaBR

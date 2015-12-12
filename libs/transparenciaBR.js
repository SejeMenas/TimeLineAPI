var request = require('request')

var TransparenciaBR = function(config) {
  this.config = config
  
  this.api = 'http://api.transparencia.org.br/api/v1'

	this.consumerAPI = function (endpoint, callback, options){
	 
    var options = options || {}
    
    options.url = this.api + endpoint
    options.headers = {
      'Access-Control-Allow-Origin': '*',
      'App-Token': config.transApi.appToken
    }
    
	  request(options, callback)  
  }
}

TransparenciaBR.prototype.getPartidos = function(callback) {
	this.consumerAPI("/partidos", callback)
}

TransparenciaBR.prototype.getEstados = function(callback) {
	this.consumerAPI("/estados", callback)
}

TransparenciaBR.prototype.getCandidatos = function(options, callback) {
  var requestOptions = {qs: options}
	this.consumerAPI("/candidatos", callback, requestOptions)
}

module.exports = TransparenciaBR

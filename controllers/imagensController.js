var Kairos = require('kairos-api')

var ImagensController = function(config) {
  var client = new Kairos(config.kairosApi.appId, config.kairosApi.kairosKey)

  this.getSemelhante = function(req, res, next) {
    console.log('get Semelhante')
    var body = req.body

    var params = {
      image: body,
      gallery_name: 'candidatos'
    }

    var resultHandler = function(result) {

      console.log(result)
      res.send(result)
    }

    console.log(params)
    console.log('kairos')
    client.recognize(params)
      .then(resultHandler)
      .catch(function(err) {
        console.error(err)
      })
  }
}

module.exports = ImagensController

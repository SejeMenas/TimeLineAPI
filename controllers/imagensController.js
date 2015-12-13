var Kairos = require('kairos-api')

var ImagensController = function(config) {
  var client = new Kairos(config.kairosApi.appId, config.kairosApi.kairosKey)

  this.getSemelhante = function(req, res, next) {
    var body = req.body
    console.log(body)

    var params = {
      image: body.image,
      gallery_name: 'candidatos'
    }

    var resultHandler = function(result) {
      console.log(result)
      res.send(result)
    }

    console.log('Using kairos')
    client.recognize(params)
      .then(resultHandler)
      .catch(next)
  }
}

module.exports = ImagensController

var Kairos = require('kairos-api')

var ImagensController = function(config) {
  var client = new Kairos(config.kairosApi.appId, config.kairosApi.kairosKey)

  this.getSemelhante = function(req, res, next) {
    var body = req.body
    imageParts = body.image.split(",")

    var params = {
      image: imageParts[1],
      gallery_name: 'candidatos'
    }

    var resultHandler = function(result) {
      console.log(result)
      res.send(result)
    }

    client.recognize(params)
      .then(resultHandler)
      .catch(next)
  }
}

module.exports = ImagensController

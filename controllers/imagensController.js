var Kairos = require('kairos-api')
  , fs = require('fs')

var ImagensController = function(config) {
  var client = new Kairos(config.kairosApi.appId, config.kairosApi.kairosKey)

  this.getSemelhante = function(req, res, next) {
    var body = req.body
    var imagem = body.image.split(',')[1]
    var buf = new Buffer(imagem, 'base64')

    console.log('write file')
    fs.writeFileSync("./public/images/candidate.jpeg", buf)

    var params = {
      image: 'https://hackpuc-30.herokuapp.com/images/candidate.jpeg',
      gallery_name: 'candidatos'
    }

    var resultHandler = function(result) {
      console.log(result)
      res.send(result)
    }

    client.recognize(params)
      .then(resultHandler)
      .catch(function(err) {
        console.error(err)
        res.status(500).send({msg: 'Erro na chamada do Kairos', err: err})
      })
  }
}

module.exports = ImagensController

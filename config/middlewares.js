var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');

var middlewares = function(app) {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(function enableCors(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    res.header("Access-Control-Allow-Headers", "*")
    if (req.method == "OPTIONS") {
      return res.send(200).end()
    } else {
      next()
    }
  })

  app.use(function setContentType(req, res, next) {
    res.header('Content-Type', 'application/json')
    next()
  })
}

module.exports = middlewares

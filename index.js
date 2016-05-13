/**
 * @fileOverview
 * @name express-coding-webhook.js
 * @author ctgnauh <huangtc@outlook.com>
 * @license MIT
 */

var EventEmitter = require('events').EventEmitter;
var codingHandler = new EventEmitter();

function codingWebhook (options) {
  var token = options.token || '';

  return function (req, res, next) {
    if (req.body.token !== token) {
      console.log('token error');
      next();
    }
    var event = req.headers['x-coding-event'];
    if (!event) {
      console.log('not coding.net request');
      next();
    }
    codingHandler.emit(event, req.body, res);
    next();
  };
}

module.exports.codingWebhook = codingWebhook;
module.exports.codingHandler = codingHandler;

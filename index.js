/**
 * @fileOverview
 * @name index.js
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
      return next();
    }
    var event = req.headers['x-coding-event'];
    if (!event) {
      console.log('not coding.net request');
      return next();
    }
    codingHandler.emit(event, req.body, res);
    return 0;
  };
}

module.exports.codingWebhook = codingWebhook;
module.exports.codingHandler = codingHandler;

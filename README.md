# express-coding-webhook

A Express middleware for handle [Coding](https://coding.net) [Webhooks](https://open.coding.net/webhook.html)

## Install

```
npm install express-coding-webhook
```

## Use

```javascript
var express = require('express');
var bodyParser = require('body-parser');
var codingWebhook = require('express-coding-webhook').codingWebhook;
var codingHandler = require('express-coding-webhook').codingHandler;

var app = express();

app.use(bodyParser.json());

app.post('/', codingWebhook({'token': your-coding-token}));

codingHandler.on('ping', function (body, res) {
  console.log(body.zen);
  res.send('pong');
});

codingHandler.on('push', function (body, res) {
});

codingHandler.on('menber', function (body, res) {
});

codingHandler.on('task', function (body, res) {
});

codingHandler.on('topic', function (body, res) {
});

codingHandler.on('document', function (body, res) {
});

codingHandler.on('star', function (body, res) {
});

codingHandler.on('merge_request', function (body, res) {
});
```

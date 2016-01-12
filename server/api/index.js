'use strict';

var express = require('express');
var mongoose = require('mongoose');
var Document = mongoose.model('Document', { title: String, category: String, user: String, updated: String, view: String });
var router = express.Router();

router.get('/documents', function (req, res) {
  Document.find({ user: "Thai" }).exec(function (err, data) {
    res.json(data);
  });
});
router.get('/document/:id', function (req, res) {});
router.post('/document', function (req, res) {
  //Document.save();
});

module.exports = router;
//# sourceMappingURL=index.js.map

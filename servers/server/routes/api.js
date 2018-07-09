var express = require('express');
var router = express.Router();
var getData = require( '../model/getData')
const https = require('https');


/* GET home pages. */
router.get('/', function(req, res) {
  console.log(req.query.name);
  https.get(req.query.name,function (ress) {
    var datas = '';
    ress.on('data',function (data){
      datas += data;
    });
    ress.on('end',function () {
      res.json(JSON.parse(datas.toString()))
    })
  });
});
router.get('/search', function(req, res) {
  console.log(req.query.name);
  https.get(req.query.name,function (ress) {
    var datas = '';
    ress.on('data',function (data){
      datas += data;
    });
    ress.on('end',function () {
      res.json(JSON.parse(datas.toString()))
    })
  });
});
router.get('/detail', function(req, res) {
  console.log(req.query.name);
  https.get(req.query.name,function (ress) {
    var datas = '';
    ress.on('data',function (data){
      datas += data;
    });
    ress.on('end',function () {
      res.json(JSON.parse(datas.toString()))
    })
  });
});
router.get('/mock', function(req, res) {
  let result = getData.getData('/mock/data.json');
  result = JSON.stringify(result);
  res.end(result);
});
router.get('/steam', function(req, res) {
  let result = getData.getData('/mock/steam.json');
  result = JSON.stringify(result);
  res.end(result);
});
router.get('/public', function(req, res) {
  let address = req.query.name;
  let result = getData.getData(address);
  result = JSON.stringify(result);
  res.end(result);
});
router.get('/cookie', function(req, res) {
  res.end("yes");
});

module.exports = router;

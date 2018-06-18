const https = require('https');
const express = require('express');
const app = express();
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/api',function (req,res) {
  console.log(req.query.name);
  https.get(req.query.name,function (ress) {
    var datas = '';
    ress.on('data',function (data){
      datas += data;
  });
    ress.on('end',function () {
      res.json(JSON.parse(datas.toString()))
      console.log(datas);
    })
  });
});
app.listen(4000,function () {
  console.log('4000port!!!!')
});

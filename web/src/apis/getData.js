const StaticUrl = require("../constants/publicUrl");
function getData(addr,cb) {
  fetch('http://localhost:3000/api?name='+addr).then( function (res) {
    res.json().then(function (data) {
      cb(data);
    })
  })
}
module.exports = getData;

const StaticUrl = require("../constants/publicUrl");
function getMock(cb) {
  fetch('http://localhost:3000/api/mock').then( function (res) {
    res.text().then(function (data) {
      cb(data);
    })
  })
}
module.exports = getMock;

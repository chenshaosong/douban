const fs = require("fs");
const path = require("path");
function getData(addr) {
  var file=path.join(__dirname,addr);
  var result=JSON.parse(fs.readFileSync( file));
  return result;
}
module.exports = {
  getData:getData
}


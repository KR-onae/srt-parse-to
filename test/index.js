const srt = require("../index.js");

var file = require("fs").readFileSync("test/test.srt");

var json = file.srtToJSON();

console.log(file.toString());
for(var i = 0; i < json.length; i++) {
    json[i].startAdd(100);
    json[i].endAdd(100);
}
console.log("==========================")
console.log(json.JSONToSrt());
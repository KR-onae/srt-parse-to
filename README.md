# Srt-Parse-To
This is Srt Parser from KRonae (Github KR-onae).
Using this, convert the srt file to JSON,
Again you can turn JSON into srt file.

# How to use
## 1. Installation
After installing npm, running the following code will install srt-parse-to.
```npm
npm install srt-parse-to
```
Alternatively, you can also use the code below.
```npm
npm i srt-parse-to
```

## 2. Usage - To JSON
The following code converts the srt code called srtFileSource into JSON and outputs it.
```node
const srt = require("srt-parse-to");

var srtFileSource = `1
00:00:00,500 --> 00:00:03,400
Hello!

2
00:00:03,500 --> 00:00:06,200
World!`;

console.log(srt.toJSON(srtFileSource));
```
However, the code below is shorter and more concise than the code above.
```node
const srt = require("srt-parse-to");

var srtFileSource = `1
00:00:00,500 --> 00:00:03,400
Hello!

2
00:00:03,500 --> 00:00:06,200
World!`;

console.log(srtFileSource.srtToJSON());
```
Parse the Srt code into JSON using 'String.prototype.srtToJSON()' or 'Buffer.prototype.srtToJSON()'.

## 2. Usage - To Srt
The following code converts the srt code called srtFileSource into JSON and outputs it.
```node
const srt = require("srt-parse-to");

var srtFileSource = `1
00:00:00,500 --> 00:00:03,400
Hello!

2
00:00:03,500 --> 00:00:06,200
World!`;

var json = srtFileSource.srtToJSON();
console.log(srt.toSrt(json));
```
You can shorten this code too.
```node
const srt = require("srt-parse-to");

var srtFileSource = `1
00:00:00,500 --> 00:00:03,400
Hello!

2
00:00:03,500 --> 00:00:06,200
World!`;

var json = srtFileSource.srtToJSON();
console.log(json.JSONToSrt());
```
Parse JSON into Srt code using 'Object.prototype.JSONToSrt()' .

# Srt-Parse
This is Srt Parser from KRonae (Github KR-onae).
Using this, convert the srt file to JSON,
Again you can turn JSON into srt file.

# How to use
## 1. Install
After installing npm run the following code.
```npm
npm install srt-parse-to
```
## 2. Use
The following code converts the srt code called srtFileSource into JSON and outputs it.
```node
const srt = require("srt-parse-to");

var srtFileSource = `1
00:00:00,500 --> 00:00:03,400
Hello!

2
00:00:03,500 --> 00:00:06,200
World!`;

console.log(srt.decode(srtFileSource));
```

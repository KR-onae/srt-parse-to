# Srt-Parse-To
This is Srt Parser from KRonae (Github KR-onae).
Using this, convert the srt file to JSON,
Again you can turn JSON into srt file.

# How to use
## 1. Install - In project folder
After installing npm, running the following code will install srt-parse-to into your project.
```npm
npm install srt-parse-to
```
Alternatively, you can also use the code below.
```npm
npm i srt-parse-to
```
## 1. Install - In computer
After installing npm, run the following code to install srt-parse-to on your machine.
```npm
npm install -g srt-parse-to
```
This can also be used by shortening 'install'.
```npm
npm -g i srt-parse-to
```

## 2. Use - To JSON
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
However, the code below is shorter and more concise than the code above.
```node
const srt = require("srt-parse-to");

var srtFileSource = `1
00:00:00,500 --> 00:00:03,400
Hello!

2
00:00:03,500 --> 00:00:06,200
World!`;

console.log(srtFileSource.srtDecode());
```
Parse the Srt code into JSON using 'String.prototype.srtDecode()'.

## 2. Use - To Srt
The following code converts the srt code called srtFileSource into JSON and outputs it.
```node
const srt = require("srt-parse-to");

var srtFileSource = `1
00:00:00,500 --> 00:00:03,400
Hello!

2
00:00:03,500 --> 00:00:06,200
World!`;

var json = srtFileSource.srtDecode();
console.log(srt.encode(json));
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

var json = srtFileSource.srtDecode();
console.log(json.srtEncode());
```
Parse JSON into Srt code using 'Object.prototype.srtEncode()' .

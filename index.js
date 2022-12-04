module.exports.datas = function() {};
module.exports.datas.prototype = Array.prototype;
module.exports.datas.prototype.encode = function() {
    return module.exports.encode(this);
}
module.exports.data = function() {};
module.exports.data.prototype = Object.prototype;
String.prototype.srtDecode = function() {
    return module.exports.decode(this);
}
Object.prototype.srtEncode = function() {
    return module.exports.encode(this);
}
Number.prototype.lengthTo = function(length) {
    var output = this.toString();
    while(output.length > length) {
        if(output.substr(0, 1) == "0") {
            output = output.substr(1);
        } else {
            break;
        }
    }
    while(output.length < length) {
        output = "0" + output;
    }
    return output;
}

module.exports.decode = function(string) {
    var srt = string.toString().replaceAll("\r\n", "\n").replaceAll("\r", "\n");
    var list = srt.split("\n\n");
    var datas, data, i, ii;
    var output = new module.exports.datas();
    for(i = 0; i < list.length; i++) {
        datas = list[i].split("\n");
        if(datas.length >= 2) {
            data = new module.exports.data();
            data.id = datas[0];
            if(datas.length >= 3) {
                data.start = datas[1].split(" --> ")[0].replaceAll(",",":").split(":");
                data.start = {
                    "hour": data.start[0] * 1,
                    "minute": data.start[1] * 1,
                    "second": data.start[2] * 1,
                    "milisecond": data.start[3] * 1
                }
                data.end = datas[1].split(" --> ")[1].replaceAll(",",":").split(":");
                data.end = {
                    "hour": data.end[0] * 1,
                    "minute": data.end[1] * 1,
                    "second": data.end[2] * 1,
                    "milisecond": data.end[3] * 1
                }
            }
            data.line = "";
            for(ii = 2; ii < datas.length; ii++) {
                data.line = data.line + "\n" + datas[ii];
            }
            data.line = data.line.substr(1);
            output.push(data);
        }
    }
    return output;
};
module.exports.encode = function(json) {
    var output = "";
    for(var i = 0; i < json.length; i++) {
        output = `${output}${json[i].id}\n${json[i].start.hour.lengthTo(2)}:${json[i].start.minute.lengthTo(2)}:${json[i].start.second.lengthTo(2)},${json[i].start.milisecond.lengthTo(2)} --> ${json[i].end.hour.lengthTo(2)}:${json[i].end.minute.lengthTo(2)}:${json[i].end.second.lengthTo(2)},${json[i].end.milisecond.lengthTo(2)}\n${json[i].line}\n\n`;
    }
    return output;
};
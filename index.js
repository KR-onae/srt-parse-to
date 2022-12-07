// TYPE - DATAS
module.exports.datas = function() {};
module.exports.datas.prototype = Array.prototype;
module.exports.datas.prototype.JSONToSrt = function() {
    return module.exports.toSrt(this);
}

// TYPE - DATA
module.exports.data = function() {};
module.exports.data.prototype = Object.prototype;
module.exports.data.prototype.check = function() { // TYPE - DATA - CHECK
    if(this.start.milisecond >= 1000) {
        this.start.second = this.start.second + Math.floor( this.start.milisecond / 1000 );
        this.start.milisecond = this.start.milisecond % 1000;
        if(this.start.second >= 60) {
            this.start.minute = this.start.minute + Math.floor( this.start.second / 60 );
            this.start.second = this.start.second % 60;
            if(this.start.minute >= 60) {
                this.start.hour = this.start.hour + Math.floor( this.start.minute / 60 );
                this.start.minute = this.start.minute % 60;
            }
        }
    }
    if(this.end.milisecond >= 1000) {
        this.end.second = this.end.second + Math.floor( this.end.milisecond / 1000 );
        this.end.milisecond = this.end.milisecond % 1000;
        if(this.end.second >= 60) {
            this.end.minute = this.end.minute + Math.floor( this.end.second / 60 );
            this.end.second = this.end.second % 60;
            if(this.end.minute >= 60) {
                this.end.hour = this.end.hour + Math.floor( this.end.minute / 60 );
                this.end.minute = this.end.minute % 60;
            }
        }
    }
}

module.exports.data.prototype.startAdd = function(x) {
    this.start.milisecond = this.start.milisecond + x;
    this.check();
    return this.start;
}
module.exports.data.prototype.startSubtract = function(x) {
    this.start.milisecond = this.start.milisecond - x;
    this.check();
    return this.start;
};

module.exports.data.prototype.endAdd = function(x) {
    this.end.milisecond = this.end.milisecond + x;
    this.check();
    return this.end;
}
module.exports.data.prototype.endSubtract = function(x) {
    this.end.milisecond = this.end.milisecond - x;
    this.check();
    return this.end;
};

// PROTOTYPES
String.prototype.srtToJSON = function() {
    return module.exports.toJSON(this);
}
Buffer.prototype.srtToJSON = function() {
    return module.exports.toJSON(this.toString());
}
Object.prototype.JSONToSrt = function() {
    return module.exports.toSrt(this);
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

// MAIN FUNCTION
module.exports.toJSON = function(string) {
    var srt = string.toString().replaceAll("\r\n", "\n").replaceAll("\r", "\n");
    var list = srt.split("\n\n");
    var datas, data, i, ii;
    var output = new module.exports.datas();
    var temp;
    for(i = 0; i < list.length; i++) {
        datas = list[i].split("\n");
        if(datas.length >= 2) {
            data = new module.exports.data();
            data.id = datas[0];
            if(datas.length >= 3) {
                temp = datas[1].split(" --> ")[0].replaceAll(",",":").split(":");
                data.start = new Object();
                data.start.hour = temp[0] * 1;
                data.start.minute = temp[1] * 1;
                data.start.second = temp[2] * 1;
                data.start.milisecond = temp[3] * 1

                temp = datas[1].split(" --> ")[1].replaceAll(",",":").split(":");
                data.end = new Object();
                data.end.hour = temp[0] * 1;
                data.end.minute = temp[1] * 1;
                data.end.second = temp[2] * 1;
                data.end.milisecond = temp[3] * 1
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
module.exports.toSrt = function(json) {
    var output = "";
    for(var i = 0; i < json.length; i++) {
        output = `${output}${json[i].id}\n${json[i].start.hour.lengthTo(2)}:${json[i].start.minute.lengthTo(2)}:${json[i].start.second.lengthTo(2)},${json[i].start.milisecond.lengthTo(2)} --> ${json[i].end.hour.lengthTo(2)}:${json[i].end.minute.lengthTo(2)}:${json[i].end.second.lengthTo(2)},${json[i].end.milisecond.lengthTo(2)}\n${json[i].line}\n\n`;
    }
    return output;
};

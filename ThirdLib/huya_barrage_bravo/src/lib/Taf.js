var Taf = {};
Taf.INT8 = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeInt8(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readInt8(tag, true, def)
    };
    this._className = function() {
        return Taf.CHAR
    }
};
Taf.INT16 = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeInt16(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readInt16(tag, true, def)
    };
    this._className = function() {
        return Taf.SHORT
    }
};
Taf.INT32 = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeInt32(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readInt32(tag, true, def)
    };
    this._className = function() {
        return Taf.INT32
    }
};
Taf.INT64 = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeInt64(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readInt64(tag, true, def)
    };
    this._className = function() {
        return Taf.INT64
    }
};
Taf.UINT8 = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeInt16(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readInt16(tag, true, def)
    };
    this._className = function() {
        return Taf.SHORT
    }
};
Taf.UInt16 = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeInt32(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readInt32(tag, true, def)
    };
    this._className = function() {
        return Taf.INT32
    }
};
Taf.UInt32 = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeInt64(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readInt64(tag, true, def)
    };
    this._className = function() {
        return Taf.INT64
    }
};
Taf.Float = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeFloat(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readFloat(tag, true, def)
    };
    this._className = function() {
        return Taf.FLOAT
    }
};
Taf.Double = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeDouble(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readDouble(tag, true, def)
    };
    this._className = function() {
        return Taf.DOUBLE
    }
};
Taf.STRING = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeString(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readString(tag, true, def)
    };
    this._className = function() {
        return Taf.STRING
    }
};
Taf.BOOLEAN = function() {
    this._clone = function() {
        return false
    };
    this._write = function(os, tag, val) {
        return os.writeBoolean(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readBoolean(tag, true, def)
    };
    this._className = function() {
        return Taf.BOOLEAN
    }
};
Taf.ENUM = function() {
    this._clone = function() {
        return 0
    };
    this._write = function(os, tag, val) {
        return os.writeInt32(tag, val)
    };
    this._read = function(is, tag, def) {
        return is.readInt32(tag, true, def)
    }
};
Taf.Vector = function(proto) {
    this.proto = proto;
    this.value = new Array
};
Taf.Vector.prototype._clone = function() {
    return new Taf.Vector(this.proto)
};
Taf.Vector.prototype._write = function(os, tag, val) {
    return os.writeVector(tag, val)
};
Taf.Vector.prototype._read = function(is, tag, def) {
    return is.readVector(tag, true, def)
};
Taf.Vector.prototype._className = function() {
    return Taf.TypeHelp.VECTOR.replace("$t", this.proto._className())
};

Taf.Map = function(kproto, vproto) {
    this.kproto = kproto;
    this.vproto = vproto;
    this.value = new Object
};
Taf.Map.prototype._clone = function() {
    return new Taf.Map(this.kproto, this.vproto)
};
Taf.Map.prototype._write = function(os, tag, val) {
    return os.writeMap(tag, val)
};
Taf.Map.prototype._read = function(is, tag, def) {
    return is.readMap(tag, true, def)
};
Taf.Map.prototype.put = function(key, value) {
    this.value[key] = value
};
Taf.Map.prototype.get = function(key) {
    return this.value[key]
};
Taf.Map.prototype.remove = function(key) {
    delete this.value[key]
};
Taf.Map.prototype.clear = function() {
    this.value = new Object
};
Taf.Map.prototype.size = function() {
    var anum = 0;
    for (var key in this.value) {
        anum++
    }
    return anum
};
Taf.Map.prototype._className = function() {
    return Taf.TypeHelp.Map.replace("$k", this.kproto._className()).replace("$v", this.vproto._className())
};
Taf.DataHelp = {
    EN_INT8: 0,
    EN_INT16: 1,
    EN_INT32: 2,
    EN_INT64: 3,
    EN_FLOAT: 4,
    EN_DOUBLE: 5,
    EN_STRING1: 6,
    EN_STRING4: 7,
    EN_MAP: 8,
    EN_LIST: 9,
    EN_STRUCTBEGIN: 10,
    EN_STRUCTEND: 11,
    EN_ZERO: 12,
    EN_SIMPLELIST: 13
};
Taf.TypeHelp = {
    BOOLEAN: "bool",
    CHAR: "char",
    SHORT: "short",
    INT32: "int32",
    INT64: "int64",
    FLOAT: "float",
    DOUBLE: "double",
    STRING: "string",
    VECTOR: "list<$t>",
    MAP: "map<$k, $v>"
};
Taf.BinBuffer = function(buffer) {
    this.buf = null;
    this.vew = null;
    this.len = 0;
    this.position = 0;
    if (buffer != null && buffer != undefined && buffer instanceof Taf.BinBuffer) {
        this.buf = buffer.buf;
        this.vew = new DataView(this.buf);
        this.len = buffer.length;
        this.position = buffer.position
    }
    if (buffer != null && buffer != undefined && buffer instanceof ArrayBuffer) {
        this.buf = buffer;
        this.vew = new DataView(this.buf);
        this.len = this.vew.byteLength;
        this.position = 0
    }
    this.__defineGetter__("length",
    function() {
        return this.len
    });
    this.__defineGetter__("buffer",
    function() {
        return this.buf
    })
};
Taf.BinBuffer.prototype._write = function(os, tag, val) {
    return os.writeBytes(tag, val)
};
Taf.BinBuffer.prototype._read = function(os, tag, def) {
    return os.readBytes(tag, true, def)
};
Taf.BinBuffer.prototype._clone = function() {
    return new Taf.BinBuffer
};
Taf.BinBuffer.prototype.allocate = function(uiLength) {
    uiLength = this.position + uiLength;
    if (this.buf != null && this.buf.length > uiLength) {
        return
    }
    var temp = new ArrayBuffer(Math.max(256, uiLength * 2));
    if (this.buf != null) {
        new Uint8Array(temp).set(new Uint8Array(this.buf));
        this.buf = undefined
    }
    this.buf = temp;
    this.vew = undefined;
    this.vew = new DataView(this.buf)
};
Taf.BinBuffer.prototype.getBuffer = function() {
    var temp = new ArrayBuffer(this.len);
    new Uint8Array(temp).set(new Uint8Array(this.buf, 0, this.len));
    return temp
};
Taf.BinBuffer.prototype.memset = function(fbuf, offset, length) {
    this.allocate(length);
    new Uint8Array(this.buf).set(new Uint8Array(fbuf, offset, length), this.position)
};
Taf.BinBuffer.prototype.writeInt8 = function(value) {
    this.allocate(1);
    this.vew.setInt8(this.position, value);
    this.position += 1;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeUInt8 = function(value) {
    this.allocate(1);
    this.vew.setUint8(this.position++, value);
    this.len = this.position
};
Taf.BinBuffer.prototype.writeInt16 = function(value) {
    this.allocate(2);
    this.vew.setInt16(this.position, value);
    this.position += 2;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeUInt16 = function(value) {
    this.allocate(2);
    this.vew.setUint16(this.position, value);
    this.position += 2;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeInt32 = function(value) {
    this.allocate(4);
    this.vew.setInt32(this.position, value);
    this.position += 4;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeUInt32 = function(value) {
    this.allocate(4);
    this.vew.setUint32(this.position, value);
    this.position += 4;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeInt64 = function(value) {
    if (typeof value == "string") {
        this.allocate(8);
        value = value.toLowerCase();
        var div = 4294967296;
        var low = 0;
        var hight = 0;
        for (var i = 0; i < value.length; i++) {
            var num = value.charCodeAt(i) - 48;
            if (num > 9) {
                num = num - 39
            }
            low = low * 10 + num;
            var dd = Math.floor(low / div);
            hight = hight * 10 + dd;
            low = low % div
        }
        this.vew.setUint32(this.position, hight);
        this.vew.setUint32(this.position + 4, low);
        this.position += 8;
        this.len = this.position;
        return
    }
    this.allocate(8);
    this.vew.setUint32(this.position, parseInt(value / 4294967296));
    this.vew.setUint32(this.position + 4, value % 4294967296);
    this.position += 8;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeFloat = function(value) {
    this.allocate(4);
    this.vew.setFloat32(this.position, value);
    this.position += 4;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeDouble = function(value) {
    this.allocate(8);
    this.vew.setFloat64(this.position, value);
    this.position += 8;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeString = function(value) {
    for (var arr = [], i = 0; i < value.length; i++) {
        arr.push(value.charCodeAt(i) & 255)
    }
    this.allocate(arr.length);
    new Uint8Array(this.buf).set(new Uint8Array(arr), this.position);
    this.position += arr.length;
    this.len = this.position
};
Taf.BinBuffer.prototype.writeBytes = function(value) {
    if (value.length == 0 || value.buf == null) return;
    this.allocate(value.length);
    new Uint8Array(this.buf).set(new Uint8Array(value.buf, 0, value.length), this.position);
    this.position += value.length;
    this.len = this.position
};
Taf.BinBuffer.prototype.readInt8 = function() {
    return this.vew.getInt8(this.position++)
};
Taf.BinBuffer.prototype.readInt16 = function() {
    this.position += 2;
    return this.vew.getInt16(this.position - 2)
};
Taf.BinBuffer.prototype.readInt32 = function() {
    this.position += 4;
    return this.vew.getInt32(this.position - 4)
};
Taf.BinBuffer.prototype.readUInt8 = function() {
    this.position += 1;
    return this.vew.getUint8(this.position - 1)
};
Taf.BinBuffer.prototype.readUInt16 = function() {
    this.position += 2;
    return this.vew.getUint16(this.position - 2)
};
Taf.BinBuffer.prototype.readUInt32 = function() {
    this.position += 4;
    return this.vew.getUint32(this.position - 4)
};
Taf.BinBuffer.prototype.readInt64 = function() {
    var H4 = this.vew.getUint32(this.position);
    var L4 = this.vew.getUint32(this.position + 4);
    this.position += 8;
    var result = "";
    var highRemain, lowRemain, tempNum;
    var MaxLowUint = Math.pow(2, 32);
    var radix = 10;
    while (H4 != 0 || L4 != 0) {
        highRemain = H4 % radix;
        tempNum = highRemain * MaxLowUint + L4;
        lowRemain = tempNum % radix;
        result = lowRemain.toString(radix) + result;
        H4 = (H4 - highRemain) / radix;
        L4 = (tempNum - lowRemain) / radix
    }
    return result
};
Taf.BinBuffer.prototype.readFloat = function() {
    var temp = this.vew.getFloat32(this.position);
    this.position += 4;
    return temp
};
Taf.BinBuffer.prototype.readDouble = function() {
    var temp = this.vew.getFloat64(this.position);
    this.position += 8;
    return temp
};
Taf.BinBuffer.prototype.readString = function(value) {
    for (var arr = [], i = 0; i < value; i++) {
        arr.push(String.fromCharCode(this.vew.getUint8(this.position++)))
    }
    var result = arr.join("");
    try {
        result = decodeURIComponent(escape(result))
    } catch(e) {}
    result = result.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;");
    return result
};
Taf.BinBuffer.prototype.readBytes = function(value) {
    var temp = new Taf.BinBuffer;
    temp.allocate(value);
    temp.memset(this.buf, this.position, value);
    temp.position = 0;
    temp.len = value;
    this.position = this.position + value;
    return temp
};
Taf.JceOutputStream = function() {
    this.buf = new Taf.BinBuffer;
    this.getBinBuffer = function() {
        return this.buf
    };
    this.getBuffer = function() {
        return this.buf.getBuffer()
    }
};
Taf.JceOutputStream.prototype.clear = function() {
    this.buf = new Taf.BinBuffer;
    return this
};
Taf.JceOutputStream.prototype.writeTo = function(tag, type) {
    if (tag < 15) {
        this.buf.writeUInt8(tag << 4 & 240 | type)
    } else {
        this.buf.writeUInt16((240 | type) << 8 | tag)
    }
};
Taf.JceOutputStream.prototype.writeBoolean = function(tag, value) {
    this.writeInt8(tag, value == true ? 1 : 0)
};
Taf.JceOutputStream.prototype.writeInt8 = function(tag, value) {
    if (value == 0) {
        this.writeTo(tag, Taf.DataHelp.EN_ZERO)
    } else {
        this.writeTo(tag, Taf.DataHelp.EN_INT8);
        this.buf.writeInt8(value)
    }
};
Taf.JceOutputStream.prototype.writeInt16 = function(tag, value) {
    if (value >= -128 && value <= 127) {
        this.writeInt8(tag, value)
    } else {
        this.writeTo(tag, Taf.DataHelp.EN_INT16);
        this.buf.writeInt16(value)
    }
};
Taf.JceOutputStream.prototype.writeInt32 = function(tag, value) {
    if (value >= -32768 && value <= 32767) {
        this.writeInt16(tag, value)
    } else {
        this.writeTo(tag, Taf.DataHelp.EN_INT32);
        this.buf.writeInt32(value)
    }
};
Taf.JceOutputStream.prototype.writeInt64 = function(tag, value) {
    if (value >= -2147483648 && value <= 2147483647) {
        this.writeInt32(tag, value)
    } else {
        this.writeTo(tag, Taf.DataHelp.EN_INT64);
        this.buf.writeInt64(value)
    }
};
Taf.JceOutputStream.prototype.writeUInt8 = function(tag, value) {
    this.writeInt16(tag, value)
};
Taf.JceOutputStream.prototype.writeUInt16 = function(tag, value) {
    this.writeInt32(tag, value)
};
Taf.JceOutputStream.prototype.writeUInt32 = function(tag, value) {
    this.writeInt64(tag, value)
};
Taf.JceOutputStream.prototype.writeFloat = function(tag, value) {
    if (value == 0) {
        this.writeTo(tag, Taf.DataHelp.EN_ZERO)
    } else {
        this.writeTo(tag, Taf.DataHelp.EN_FLOAT);
        this.buf.writeFloat(value)
    }
};
Taf.JceOutputStream.prototype.writeDouble = function(tag, value) {
    if (value == 0) {
        this.writeTo(tag, Taf.DataHelp.EN_ZERO)
    } else {
        this.writeTo(tag, Taf.DataHelp.EN_DOUBLE);
        this.buf.writeDouble(value)
    }
};
Taf.JceOutputStream.prototype.writeStruct = function(tag, value) {
    if (value.writeTo == undefined) {
        throw Error("not defined writeTo Function")
    }
    this.writeTo(tag, Taf.DataHelp.EN_STRUCTBEGIN);
    value.writeTo(this);
    this.writeTo(0, Taf.DataHelp.EN_STRUCTEND)
};
Taf.JceOutputStream.prototype.writeString = function(tag, value) {
    var str = value;
    try {
        str = unescape(encodeURIComponent(str))
    } catch(e) {}
    if (str.length > 255) {
        this.writeTo(tag, Taf.DataHelp.EN_STRING4);
        this.buf.writeUInt32(str.length)
    } else {
        this.writeTo(tag, Taf.DataHelp.EN_STRING1);
        this.buf.writeUInt8(str.length)
    }
    this.buf.writeString(str)
};
Taf.JceOutputStream.prototype.writeBytes = function(tag, value) {
    if (! (value instanceof Taf.BinBuffer)) {
        throw Error("value not instanceof Taf.BinBuffer")
    }
    this.writeTo(tag, Taf.DataHelp.EN_SIMPLELIST);
    this.writeTo(0, Taf.DataHelp.EN_INT8);
    this.writeInt32(0, value.length);
    this.buf.writeBytes(value)
};
Taf.JceOutputStream.prototype.writeVector = function(tag, value) {
    this.writeTo(tag, Taf.DataHelp.EN_LIST);
    this.writeInt32(0, value.value.length);
    for (var i = 0; i < value.value.length; i++) {
        value.proto._write(this, 0, value.value[i])
    }
};
Taf.JceOutputStream.prototype.writeMap = function(tag, value) {
    this.writeTo(tag, Taf.DataHelp.EN_MAP);
    this.writeInt32(0, value.size());
    for (var temp in value.value) {
        value.kproto._write(this, 0, temp);
        value.vproto._write(this, 1, value.value[temp])
    }
};
Taf.JceInputStream = function(buffer) {
    this.buf = new Taf.BinBuffer(buffer)
};
Taf.JceInputStream.prototype.setBuffer = function(arrayBuffer) {
    this.buf = new Taf.BinBuffer(arrayBuffer);
    return this
};
Taf.JceInputStream.prototype.readFrom = function() {
    var temp = this.buf.readUInt8();
    var tag = (temp & 240) >> 4;
    var type = temp & 15;
    if (tag >= 15) tag = this.buf.readUInt8();
    return {
        tag: tag,
        type: type
    }
};
Taf.JceInputStream.prototype.peekFrom = function() {
    var pos = this.buf.position;
    var head = this.readFrom();
    this.buf.position = pos;
    return {
        tag: head.tag,
        type: head.type,
        size: head.tag >= 15 ? 2 : 1
    }
};
Taf.JceInputStream.prototype.skipField = function(type) {
    switch (type) {
    case Taf.DataHelp.EN_INT8:
        this.buf.position += 1;
        break;
    case Taf.DataHelp.EN_INT16:
        this.buf.position += 2;
        break;
    case Taf.DataHelp.EN_INT32:
        this.buf.position += 4;
        break;
    case Taf.DataHelp.EN_INT64:
        this.buf.position += 8;
        break;
    case Taf.DataHelp.EN_STRING1:
        var a = this.buf.readUInt8();
        this.buf.position += a;
        break;
    case Taf.DataHelp.EN_STRING4:
        var b = this.buf.readInt32();
        this.buf.position += b;
        break;
    case Taf.DataHelp.EN_STRUCTBEGIN:
        this.skipToStructEnd();
        break;
    case Taf.DataHelp.EN_STRUCTEND:
    case Taf.DataHelp.EN_ZERO:
        break;
    case Taf.DataHelp.EN_MAP:
        {
            var size = this.readInt32(0, true);
            for (var i = 0; i < size * 2; ++i) {
                var head = this.readFrom();
                this.skipField(head.type)
            }
            break
        }
    case Taf.DataHelp.EN_SIMPLELIST:
        {
            var head = this.readFrom();
            if (head.type != Taf.DataHelp.EN_INT8) {
                throw Error("skipField with invalid type, type value: " + type + "," + head.type)
            }
            var a = this.readInt32(0, true);
            this.buf.position += a;
            break
        }
    case Taf.DataHelp.EN_LIST:
        {
            var size = this.readInt32(0, true);
            for (var i = 0; i < size; ++i) {
                var head = this.readFrom();
                this.skipField(head.type)
            }
            break
        }
    default:
        throw new Error("skipField with invalid type, type value: " + type)
    }
};
Taf.JceInputStream.prototype.skipToStructEnd = function() {
    for (;;) {
        var head = this.readFrom();
        this.skipField(head.type);
        if (head.type == Taf.DataHelp.EN_STRUCTEND) {
            return
        }
    }
};
Taf.JceInputStream.prototype.skipToTag = function(tag, require) {
    while (this.buf.position < this.buf.length) {
        var head = this.peekFrom();
        if (tag <= head.tag || head.type == Taf.DataHelp.EN_STRUCTEND) {
            return head.type == Taf.DataHelp.EN_STRUCTEND ? false: tag == head.tag
        }
        this.buf.position += head.size;
        this.skipField(head.type)
    }
    if (require) throw Error("require field not exist, tag:" + tag);
    return false
};
Taf.JceInputStream.prototype.readBoolean = function(tag, require, def) {
    return this.readInt8(tag, require, def) == 1 ? true: false
};
Taf.JceInputStream.prototype.readInt8 = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
        return 0;
    case Taf.DataHelp.EN_INT8:
        return this.buf.readInt8()
    }
    throw Error("read int8 type mismatch, tag:" + tag + ", get type:" + head.type)
};
Taf.JceInputStream.prototype.readInt16 = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
        return 0;
    case Taf.DataHelp.EN_INT8:
        return this.buf.readInt8();
    case Taf.DataHelp.EN_INT16:
        return this.buf.readInt16()
    }
    throw Error("read int16 type mismatch, tag:" + tag + ", get type:" + head.type)
};
Taf.JceInputStream.prototype.readInt32 = function(tag, requrire, def) {
    if (this.skipToTag(tag, requrire) == false) {
        return def
    }
    var head = this.readFrom();
    switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
        return 0;
    case Taf.DataHelp.EN_INT8:
        return this.buf.readInt8();
    case Taf.DataHelp.EN_INT16:
        return this.buf.readInt16();
    case Taf.DataHelp.EN_INT32:
        return this.buf.readInt32()
    }
    throw Error("read int32 type mismatch, tag:" + tag + ", get type:" + head.type)
};
Taf.JceInputStream.prototype.readInt64 = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
        return 0;
    case Taf.DataHelp.EN_INT8:
        return this.buf.readInt8();
    case Taf.DataHelp.EN_INT16:
        return this.buf.readInt16();
    case Taf.DataHelp.EN_INT32:
        return this.buf.readInt32();
    case Taf.DataHelp.EN_INT64:
        return this.buf.readInt64()
    }
    throw Error("read int64 type mismatch, tag:" + tag + ", get type:" + head.type)
};
Taf.JceInputStream.prototype.readFloat = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
        return 0;
    case Taf.DataHelp.EN_FLOAT:
        return this.buf.readFloat()
    }
    throw Error("read float type mismatch, tag:" + tag + ", get type:" + h.type)
};
Taf.JceInputStream.prototype.readDouble = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    switch (head.type) {
    case Taf.DataHelp.EN_ZERO:
        return 0;
    case Taf.DataHelp.EN_DOUBLE:
        return this.buf.readDouble()
    }
    throw Error("read double type mismatch, tag:" + tag + ", get type:" + h.type)
};
Taf.JceInputStream.prototype.readUInt8 = function(tag, require, def) {
    return this.readInt16(tag, require, def)
};
Taf.JceInputStream.prototype.readUInt16 = function(tag, require, def) {
    return this.readInt32(tag, require, def)
};
Taf.JceInputStream.prototype.readUInt32 = function(tag, require, def) {
    return this.readInt64(tag, require, def)
};
Taf.JceInputStream.prototype.readStruct = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    if (head.type != Taf.DataHelp.EN_STRUCTBEGIN) {
        throw Error("read struct type mismatch, tag: " + tag + ", get type:" + head.type)
    }
    def.readFrom(this);
    this.skipToStructEnd();
    return def
};
Taf.JceInputStream.prototype.readString = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    if (head.type == Taf.DataHelp.EN_STRING1) {
        return this.buf.readString(this.buf.readUInt8())
    }
    if (head.type == Taf.DataHelp.EN_STRING4) {
        return this.buf.readString(this.buf.readUInt32())
    }
    throw Error("read 'string' type mismatch, tag: " + tag + ", get type: " + head.type + ".")
};
Taf.JceInputStream.prototype.readString2 = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    if (head.type == Taf.DataHelp.EN_STRING1) {
        return this.buf.readBytes(this.buf.readUInt8())
    }
    if (head.type == Taf.DataHelp.EN_STRING4) {
        return this.buf.readBytes(this.buf.readUInt32())
    }
    throw Error("read 'string2' type mismatch, tag: " + tag + ", get type: " + head.type + ".")
};
Taf.JceInputStream.prototype.readBytes = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    if (head.type == Taf.DataHelp.EN_SIMPLELIST) {
        var temp = this.readFrom();
        if (temp.type != Taf.DataHelp.EN_INT8) {
            throw Error("type mismatch, tag:" + tag + ",type:" + head.type + "," + temp.type)
        }
        var size = this.readInt32(0, true);
        if (size < 0) {
            throw Error("invalid size, tag:" + tag + ",type:" + head.type + "," + temp.type)
        }
        return this.buf.readBytes(size)
    }
    if (head.type == Taf.DataHelp.EN_LIST) {
        var size = this.readInt32(0, true);
        return this.buf.readBytes(size)
    }
    throw Error("type mismatch, tag:" + tag + ",type:" + head.type)
};
Taf.JceInputStream.prototype.readVector = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    if (head.type != Taf.DataHelp.EN_LIST) {
        throw Error("read 'vector' type mismatch, tag: " + tag + ", get type: " + head.type)
    }
    var size = this.readInt32(0, true);
    if (size < 0) {
        throw Error("invalid size, tag: " + tag + ", type: " + head.type + ", size: " + size)
    }
    for (var i = 0; i < size; ++i) {
        def.value.push(def.proto._read(this, 0, def.proto._clone()))
    }
    return def
};
Taf.JceInputStream.prototype.readMap = function(tag, require, def) {
    if (this.skipToTag(tag, require) == false) {
        return def
    }
    var head = this.readFrom();
    if (head.type != Taf.DataHelp.EN_MAP) {
        throw Error("read 'map' type mismatch, tag: " + tag + ", get type: " + head.type)
    }
    var size = this.readInt32(0, true);
    if (size < 0) {
        throw Error("invalid map, tag: " + tag + ", size: " + size)
    }
    for (var i = 0; i < size; i++) {
        var key = def.kproto._read(this, 0, def.kproto._clone());
        var val = def.vproto._read(this, 1, def.vproto._clone());
        def.put(key, val)
    }
    return def
};
Taf.Wup = function() {
    this.iVersion = 3;
    this.cPacketType = 0;
    this.iMessageType = 0;
    this.iRequestId = 0;
    this.sServantName = "";
    this.sFuncName = "";
    this.sBuffer = new Taf.BinBuffer;
    this.iTimeout = 0;
    this.context = new Taf.Map(new Taf.STRING, new Taf.STRING);
    this.status = new Taf.Map(new Taf.STRING, new Taf.STRING);
    this.newdata = new Taf.Map(new Taf.STRING, new Taf.BinBuffer);
    this.iStream = new Taf.JceInputStream;
    this.oStream = new Taf.JceOutputStream
};
Taf.Wup.prototype.hasKey = function(value) {
    return this.newdata.hasKey(value)
};
Taf.Wup.prototype.setVersion = function(value) {
    this.iVersion = value
};
Taf.Wup.prototype.getVersion = function(value) {
    return this.iVersion
};
Taf.Wup.prototype.setServant = function(value) {
    this.sServantName = value
};
Taf.Wup.prototype.setFunc = function(value) {
    this.sFuncName = value
};
Taf.Wup.prototype.setRequestId = function(value) {
    this.iRequestId = value ? value: ++this.iRequestId
};
Taf.Wup.prototype.getRequestId = function() {
    return this.iRequestId
};
Taf.Wup.prototype.setTimeOut = function(value) {
    this.iTimeout = value
};
Taf.Wup.prototype.getTimeOut = function() {
    return this.iTimeout
};
Taf.Wup.prototype.writeTo = function() {
    var os = this.oStream.clear();
    os.writeInt16(1, this.iVersion);
    os.writeInt8(2, this.cPacketType);
    os.writeInt32(3, this.iMessageType);
    os.writeInt32(4, this.iRequestId);
    os.writeString(5, this.sServantName);
    os.writeString(6, this.sFuncName);
    os.writeBytes(7, this.sBuffer);
    os.writeInt32(8, this.iTimeout);
    os.writeMap(9, this.context);
    os.writeMap(10, this.status);
    return new Taf.BinBuffer(os.getBuffer())
};
Taf.Wup.prototype.encode = function() {
    var os = this.oStream.clear();
    os.writeMap(0, this.newdata);
    this.sBuffer = os.getBinBuffer();
    var temp = this.writeTo();
    var buf = new Taf.BinBuffer;
    buf.writeInt32(4 + temp.len);
    buf.writeBytes(temp);
    return buf
};
Taf.Wup.prototype.writeBoolean = function(name, value) {
    var os = this.oStream.clear();
    os.writeBoolean(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeInt8 = function(name, value) {
    var os = this.oStream.clear();
    os.writeInt8(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeInt16 = function(name, value) {
    var os = this.oStream.clear();
    os.writeInt16(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeInt32 = function(name, value) {
    var os = this.oStream.clear();
    os.writeInt32(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeInt64 = function(name, value) {
    var os = this.oStream.clear();
    os.writeInt64(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeFloat = function(name, value) {
    var os = this.oStream.clear();
    os.writeFloat(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeDouble = function(name, value) {
    var os = this.oStream.clear();
    os.writeDouble(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeString = function(name, value) {
    var os = this.oStream.clear();
    os.writeString(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeVector = function(name, value) {
    var os = this.oStream.clear();
    os.writeVector(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBinBuffer()))
};
Taf.Wup.prototype.writeStruct = function(name, value) {
    var os = this.oStream.clear();
    os.writeStruct(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeBytes = function(name, value) {
    var os = this.oStream.clear();
    os.writeBytes(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.writeMap = function(name, value) {
    var os = this.oStream.clear();
    os.writeMap(0, value);
    this.newdata.put(name, new Taf.BinBuffer(os.getBuffer()))
};
Taf.Wup.prototype.readFrom = function(is) {
    this.iVersion = is.readInt16(1, true);
    this.cPacketType = is.readInt8(2, true);
    this.iMessageType = is.readInt32(3, true);
    this.iRequestId = is.readInt32(4, true);
    this.sServantName = is.readString(5, true);
    this.sFuncName = is.readString(6, true);

    this.sBuffer = is.readBytes(7, true);
    this.iTimeout = is.readInt32(8, true);
    this.context = is.readMap(9, true, this.context);
    this.status = is.readMap(10, true, this.status)
};
Taf.Wup.prototype.decode = function(buf) {
    var is = this.iStream.setBuffer(buf);
    var len = is.buf.vew.getInt32(is.buf.position);
    if (len < 4) {
        throw Error("packet length too short")
    }
    is.buf.position += 4;
    this.readFrom(is);
    is = this.iStream.setBuffer(this.sBuffer.getBuffer());
    this.newdata.clear();
    is.readMap(0, true, this.newdata)
};
Taf.Wup.prototype.readBoolean = function(name) {
    var temp, def;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readBoolean(0, true, def);
    return def
};
Taf.Wup.prototype.readInt8 = function(name) {
    var temp, def;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readInt8(0, true, def);
    return def
};
Taf.Wup.prototype.readInt16 = function(name) {
    var temp, def;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readInt16(0, true, def);
    return def
};
Taf.Wup.prototype.readInt32 = function(name) {
    var temp, def;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readInt32(0, true, def);
    return def
};
Taf.Wup.prototype.readInt64 = function(name) {
    var temp, def;
    temp = this.newdata.get(name);

    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readInt64(0, true, def);
    return def
};
Taf.Wup.prototype.readFloat = function(name) {
    var temp, def;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readFloat(0, true, def);
    return def
};
Taf.Wup.prototype.readDouble = function(name) {
    var temp;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readDouble(0, true, def);
    return def
};
Taf.Wup.prototype.readVector = function(name, def, className) {
    var temp;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readVector(0, true, def);
    return def
};
Taf.Wup.prototype.readStruct = function(name, def, className) {
    var temp;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readStruct(0, true, def);
    return def
};
Taf.Wup.prototype.readMap = function(name, def, className) {
    var temp;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readMap(0, true, def);
    return def
};
Taf.Wup.prototype.readBytes = function(name, def, className) {
    var temp;
    temp = this.newdata.get(name);
    if (temp == undefined) {
        throw Error("UniAttribute not found key:" + name)
    }
    var is = this.iStream.setBuffer(temp.buffer);
    def = is.readBytes(0, true, def);
    return def
};
Taf.Util = Taf.Util || {};
Taf.Util.jcestream = function(value, col) {
    if (value == null || value == undefined) {
        console.log("Taf.Util.jcestream::value is null or undefined");
        return
    }
    if (! (value instanceof ArrayBuffer)) {
        console.log("Taf.Util.jcestream::value is not ArrayBuffer");
        return
    }
    col = col || 16;
    var view = new Uint8Array(value);
    var str = "";
    for (var i = 0; i < view.length; i++) {
        if (i != 0 && i % col == 0) {
            str += "\n"
        } else if (i != 0) {
            str += " "
        }
        str += (view[i] > 15 ? "": "0") + view[i].toString(16)
    }
    console.log(str.toUpperCase())
};
Taf.Util.str2ab = function(value) {
    var idx, len = value.length,
    arr = new Array(len);
    for (idx = 0; idx < len; ++idx) {
        arr[idx] = value.charCodeAt(idx)
    }
    return new Uint8Array(arr).buffer
};
Taf.Util.ajax = function(sURL, oData, oSuccFunc, oFailFunc) {
    var xmlobj = new XMLHttpRequest;
    xmlobj.overrideMimeType("text/plain; charset=x-user-defined");
    var handleStateChange = function() {
        if (xmlobj.readyState === 4) {
            if (xmlobj.status === 200 || xmlobj.status === 304) {
                oSuccFunc(Taf.Util.str2ab(xmlobj.response))
            } else {
                oFailFunc(xmlobj.status)
            }
            xmlobj.removeEventListener("readystatechange", handleStateChange);
            xmlobj = undefined
        }
    };
    xmlobj.addEventListener("readystatechange", handleStateChange);
    xmlobj.open("post", sURL);
    xmlobj.send(oData)
};

// 导出数据操作模块
module.exports = Taf;
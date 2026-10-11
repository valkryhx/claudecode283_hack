// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { tdn, ndn, AIo } from "B:/~BUN/root/chunk-cs7ggjv6.js";
import { fdt, dNt, VDr, qDr } from "B:/~BUN/root/chunk-1tqc51sz.js";
import { ec } from "B:/~BUN/root/chunk-3zvn01m4.js";
import { hdt } from "B:/~BUN/root/chunk-pxted1kc.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var F = be(ec());
class zz extends F.ServiceException {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, zz.prototype);
  }
}
class aVn extends zz {
  name = "AccessDeniedException";
  $fault = "client";
  constructor(e) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, aVn.prototype);
  }
}
class cdt extends zz {
  name = "InternalServerException";
  $fault = "server";
  constructor(e) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...e
    });
    Object.setPrototypeOf(this, cdt.prototype);
  }
}
class ddt extends zz {
  name = "ThrottlingException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, ddt.prototype);
  }
}
class udt extends zz {
  name = "ValidationException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, udt.prototype);
  }
}
class lVn extends zz {
  name = "ConflictException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, lVn.prototype);
  }
}
class cVn extends zz {
  name = "ResourceNotFoundException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, cVn.prototype);
  }
}
class dVn extends zz {
  name = "ServiceQuotaExceededException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, dVn.prototype);
  }
}
class uVn extends zz {
  name = "ServiceUnavailableException";
  $fault = "server";
  constructor(e) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...e
    });
    Object.setPrototypeOf(this, uVn.prototype);
  }
}
class pVn extends zz {
  name = "ModelErrorException";
  $fault = "client";
  originalStatusCode;
  resourceName;
  constructor(e) {
    super({
      name: "ModelErrorException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, pVn.prototype), this.originalStatusCode = e.originalStatusCode, this.resourceName = e.resourceName;
  }
}
class fVn extends zz {
  name = "ModelNotReadyException";
  $fault = "client";
  $retryable = {};
  constructor(e) {
    super({
      name: "ModelNotReadyException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, fVn.prototype);
  }
}
class mVn extends zz {
  name = "ModelTimeoutException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ModelTimeoutException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, mVn.prototype);
  }
}
class pdt extends zz {
  name = "ModelStreamErrorException";
  $fault = "client";
  originalStatusCode;
  originalMessage;
  constructor(e) {
    super({
      name: "ModelStreamErrorException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, pdt.prototype), this.originalStatusCode = e.originalStatusCode, this.originalMessage = e.originalMessage;
  }
}
var G = function () {
  function e() {
    this.crc32 = new p();
  }
  return e.prototype.update = function update(t) {
    if (dNt(t)) return;
    this.crc32.update(fdt(t));
  }, e.prototype.digest = function digest() {
    return tdn(this, void 0, void 0, function () {
      return ndn(this, function (t) {
        return [2, VDr(this.crc32.digest())];
      });
    });
  }, e.prototype.reset = function reset() {
    this.crc32 = new p();
  }, e;
}();
var p = function () {
  function e() {
    this.checksum = 4294967295;
  }
  return e.prototype.update = function update(t) {
    var r, s;
    try {
      for (var n = AIo(t), o = n.next(); !o.done; o = n.next()) {
        var i = o.value;
        this.checksum = this.checksum >>> 8 ^ z[(this.checksum ^ i) & 255];
      }
    } catch (error) {
      r = {
        error: error
      };
    } finally {
      try {
        if (o && !o.done && (s = n.return)) s.call(n);
      } finally {
        if (r) throw r.error;
      }
    }
    return this;
  }, e.prototype.digest = function digest() {
    return (this.checksum ^ 4294967295) >>> 0;
  }, e;
}();
var j = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
  z = qDr(j);
var l = be(hdt());
var v = be(hdt());
class B {
  bytes;
  constructor(e) {
    if (this.bytes = e, e.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(e) {
    if (e > 9223372036854776000 || e < -9223372036854776000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
    let uint8Array = new Uint8Array(8);
    for (let r = 7, s = Math.abs(Math.round(e)); r > -1 && s > 0; r--, s /= 256) uint8Array[r] = s;
    if (e < 0) b(uint8Array);
    return new B(uint8Array);
  }
  valueOf() {
    let e = this.bytes.slice(0),
      t = e[0] & 128;
    if (t) b(e);
    return parseInt(v.toHex(e), 16) * (t ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function b(e) {
  for (let t = 0; t < 8; t++) e[t] ^= 255;
  for (let t = 7; t > -1; t--) if (e[t]++, e[t] !== 0) break;
}
class h {
  toUtf8;
  fromUtf8;
  constructor(e, t) {
    this.toUtf8 = e, this.fromUtf8 = t;
  }
  format(e) {
    let t = [];
    for (let n of Object.keys(e)) {
      let o = this.fromUtf8(n);
      t.push(Uint8Array.from([o.byteLength]), o, this.formatHeaderValue(e[n]));
    }
    let uint8Array_2 = new Uint8Array(t.reduce((acc, item) => acc + item.byteLength, 0)),
      s = 0;
    for (let n of t) uint8Array_2.set(n, s), s += n.byteLength;
    return uint8Array_2;
  }
  formatHeaderValue(e) {
    switch (e.type) {
      case "boolean":
        return Uint8Array.from([e.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, e.value]);
      case "short":
        let dataView = new DataView(new ArrayBuffer(3));
        return dataView.setUint8(0, 3), dataView.setInt16(1, e.value, !1), new Uint8Array(dataView.buffer);
      case "integer":
        let dataView_2 = new DataView(new ArrayBuffer(5));
        return dataView_2.setUint8(0, 4), dataView_2.setInt32(1, e.value, !1), new Uint8Array(dataView_2.buffer);
      case "long":
        let uint8Array_3 = new Uint8Array(9);
        return uint8Array_3[0] = 5, uint8Array_3.set(e.value.bytes, 1), uint8Array_3;
      case "binary":
        let dataView_3 = new DataView(new ArrayBuffer(3 + e.value.byteLength));
        dataView_3.setUint8(0, 6), dataView_3.setUint16(1, e.value.byteLength, !1);
        let uint8Array_4 = new Uint8Array(dataView_3.buffer);
        return uint8Array_4.set(e.value, 3), uint8Array_4;
      case "string":
        let i = this.fromUtf8(e.value),
          dataView_4 = new DataView(new ArrayBuffer(3 + i.byteLength));
        dataView_4.setUint8(0, 7), dataView_4.setUint16(1, i.byteLength, !1);
        let uint8Array_5 = new Uint8Array(dataView_4.buffer);
        return uint8Array_5.set(i, 3), uint8Array_5;
      case "timestamp":
        let uint8Array_6 = new Uint8Array(9);
        return uint8Array_6[0] = 8, uint8Array_6.set(B.fromNumber(e.value.valueOf()).bytes, 1), uint8Array_6;
      case "uuid":
        if (!X.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
        let uint8Array_7 = new Uint8Array(17);
        return uint8Array_7[0] = 9, uint8Array_7.set(l.fromHex(e.value.replace(/\-/g, "")), 1), uint8Array_7;
    }
  }
  parse(e) {
    let t = {},
      r = 0;
    while (r < e.byteLength) {
      let s = e.getUint8(r++),
        n = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + r, s));
      switch (r += s, e.getUint8(r++)) {
        case 0:
          t[n] = {
            type: type,
            value: !0
          };
          break;
        case 1:
          t[n] = {
            type: type,
            value: !1
          };
          break;
        case 2:
          t[n] = {
            type: type_2,
            value: e.getInt8(r++)
          };
          break;
        case 3:
          t[n] = {
            type: type_3,
            value: e.getInt16(r, !1)
          }, r += 2;
          break;
        case 4:
          t[n] = {
            type: type_4,
            value: e.getInt32(r, !1)
          }, r += 4;
          break;
        case 5:
          t[n] = {
            type: type_5,
            value: new B(new Uint8Array(e.buffer, e.byteOffset + r, 8))
          }, r += 8;
          break;
        case 6:
          let o = e.getUint16(r, !1);
          r += 2, t[n] = {
            type: type_6,
            value: new Uint8Array(e.buffer, e.byteOffset + r, o)
          }, r += o;
          break;
        case 7:
          let i = e.getUint16(r, !1);
          r += 2, t[n] = {
            type: type_7,
            value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + r, i))
          }, r += i;
          break;
        case 8:
          t[n] = {
            type: type_8,
            value: new Date(new B(new Uint8Array(e.buffer, e.byteOffset + r, 8)).valueOf())
          }, r += 8;
          break;
        case 9:
          let uint8Array_8 = new Uint8Array(e.buffer, e.byteOffset + r, 16);
          r += 16, t[n] = {
            type: type_9,
            value: `${l.toHex(uint8Array_8.subarray(0, 4))}-${l.toHex(uint8Array_8.subarray(4, 6))}-${l.toHex(uint8Array_8.subarray(6, 8))}-${l.toHex(uint8Array_8.subarray(8, 10))}-${l.toHex(uint8Array_8.subarray(10))}`
          };
          break;
        default:
          throw Error("Unrecognized header type tag");
      }
    }
    return t;
  }
}
var S;
(function (e) {
  e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid";
})(S || (S = {}));
var type = "boolean",
  type_2 = "byte",
  type_3 = "short",
  type_4 = "integer",
  type_5 = "long",
  type_6 = "binary",
  type_7 = "string",
  type_8 = "timestamp",
  type_9 = "uuid",
  X = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var U = 4,
  u = U * 2,
  m = 4,
  Z = u + m * 2;
function O({
  byteLength: byteLength,
  byteOffset: byteOffset,
  buffer: buffer
}) {
  if (byteLength < Z) throw Error("Provided message too short to accommodate event stream message overhead");
  let dataView_5 = new DataView(buffer, byteOffset, byteLength),
    n = dataView_5.getUint32(0, !1);
  if (byteLength !== n) throw Error("Reported message length does not match received message length");
  let o = dataView_5.getUint32(U, !1),
    i = dataView_5.getUint32(u, !1),
    a = dataView_5.getUint32(byteLength - m, !1),
    c = new p().update(new Uint8Array(buffer, byteOffset, u));
  if (i !== c.digest()) throw Error(`The prelude checksum specified in the message (${i}) does not match the calculated CRC32 checksum (${c.digest()})`);
  if (c.update(new Uint8Array(buffer, byteOffset + u, byteLength - (u + m))), a !== c.digest()) throw Error(`The message checksum (${c.digest()}) did not match the expected value of ${a}`);
  return {
    headers: new DataView(buffer, byteOffset + u + m, o),
    body: new Uint8Array(buffer, byteOffset + u + m + o, n - o - (u + m + m))
  };
}
class edn {
  headerMarshaller;
  messageBuffer;
  isEndOfStream;
  constructor(e, t) {
    this.headerMarshaller = new h(e, t), this.messageBuffer = [], this.isEndOfStream = !1;
  }
  feed(e) {
    this.messageBuffer.push(this.decode(e));
  }
  endOfStream() {
    this.isEndOfStream = !0;
  }
  getMessage() {
    let e = this.messageBuffer.pop(),
      isEndOfStream = this.isEndOfStream;
    return {
      getMessage() {
        return e;
      },
      isEndOfStream() {
        return isEndOfStream;
      }
    };
  }
  getAvailableMessages() {
    let messageBuffer = this.messageBuffer;
    this.messageBuffer = [];
    let isEndOfStream_2 = this.isEndOfStream;
    return {
      getMessages() {
        return messageBuffer;
      },
      isEndOfStream() {
        return isEndOfStream_2;
      }
    };
  }
  encode({
    headers: headers,
    body: body
  }) {
    let r = this.headerMarshaller.format(headers),
      s = r.byteLength + body.byteLength + 16,
      uint8Array_9 = new Uint8Array(s),
      dataView_6 = new DataView(uint8Array_9.buffer, uint8Array_9.byteOffset, uint8Array_9.byteLength),
      i = new p();
    return dataView_6.setUint32(0, s, !1), dataView_6.setUint32(4, r.byteLength, !1), dataView_6.setUint32(8, i.update(uint8Array_9.subarray(0, 8)).digest(), !1), uint8Array_9.set(r, 12), uint8Array_9.set(body, r.byteLength + 12), dataView_6.setUint32(s - 4, i.update(uint8Array_9.subarray(8, s - 4)).digest(), !1), uint8Array_9;
  }
  decode(e) {
    let {
      headers: headers_2,
      body: body_2
    } = O(e);
    return {
      headers: this.headerMarshaller.parse(headers_2),
      body: body_2
    };
  }
  formatHeaders(e) {
    return this.headerMarshaller.format(e);
  }
}
class C {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (let e of this.options.inputStream) yield this.options.decoder.decode(e);
  }
}
class g {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (let e of this.options.messageStream) yield this.options.encoder.encode(e);
    if (this.options.includeEndFrame) yield new Uint8Array(0);
  }
}
class E {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (let e of this.options.messageStream) {
      let t = await this.options.deserializer(e);
      if (t === void 0) continue;
      yield t;
    }
  }
}
class A {
  options;
  constructor(e) {
    this.options = e;
  }
  [Symbol.asyncIterator]() {
    return this.asyncIterator();
  }
  async *asyncIterator() {
    for await (let e of this.options.inputStream) yield this.options.serializer(e);
  }
}
function I(e) {
  let t = 0,
    r = 0,
    s = null,
    n = null,
    o = a => {
      if (typeof a !== "number") throw Error("Attempted to allocate an event message where size was not a number: " + a);
      t = a, r = 4, s = new Uint8Array(a), new DataView(s.buffer).setUint32(0, a, !1);
    },
    i = async function* () {
      let a = e[Symbol.asyncIterator]();
      while (!0) {
        let {
          value: value,
          done: done
        } = await a.next();
        if (done) {
          if (!t) return;else if (t === r) yield s;else throw Error("Truncated event message received.");
          return;
        }
        let f = value.length,
          x = 0;
        while (x < f) {
          if (!s) {
            let T = f - x;
            if (!n) n = new Uint8Array(4);
            let D = Math.min(4 - r, T);
            if (n.set(value.slice(x, x + D), r), r += D, x += D, r < 4) break;
            o(new DataView(n.buffer).getUint32(0, !1)), n = null;
          }
          let d = Math.min(t - r, f - x);
          if (s.set(value.slice(x, x + d), r), r += d, x += d, t && t === r) yield s, s = null, t = 0, r = 0;
        }
      }
    };
  return {
    [Symbol.asyncIterator]: i
  };
}
function k(e, t) {
  return async function (r) {
    let {
      value: value_2
    } = r.headers[":message-type"];
    if (value_2 === "error") {
      let n = Error(r.headers[":error-message"].value || "UnknownError");
      throw n.name = r.headers[":error-code"].value, n;
    } else if (value_2 === "exception") {
      let n = r.headers[":exception-type"].value,
        o = {
          [n]: r
        },
        i = await e(o);
      if (i.$unknown) {
        let a = Error(t(r.body));
        throw a.name = n, a;
      }
      throw i[n];
    } else if (value_2 === "event") {
      let n = {
          [r.headers[":event-type"].value]: r
        },
        o = await e(n);
      if (o.$unknown) return;
      return o;
    } else throw Error(`Unrecognizable event type: ${r.headers[":event-type"].value}`);
  };
}
class w {
  eventStreamCodec;
  utfEncoder;
  constructor({
    utf8Encoder: utf8Encoder,
    utf8Decoder: utf8Decoder
  }) {
    this.eventStreamCodec = new edn(utf8Encoder, utf8Decoder), this.utfEncoder = utf8Encoder;
  }
  deserialize(e, t) {
    let inputStream = I(e);
    return new E({
      messageStream: new C({
        inputStream: inputStream,
        decoder: this.eventStreamCodec
      }),
      deserializer: k(t, this.utfEncoder)
    });
  }
  serialize(inputStream_2, serializer) {
    return new g({
      messageStream: new A({
        inputStream: inputStream_2,
        serializer: serializer
      }),
      encoder: this.eventStreamCodec,
      includeEndFrame: !0
    });
  }
}
import { Readable as R } from "stream";
async function* N(e) {
  let t = !1,
    r = !1,
    s = [];
  e.on("error", n => {
    if (!t) t = !0;
    if (n) throw n;
  }), e.on("data", n => {
    s.push(n);
  }), e.on("end", () => {
    t = !0;
  });
  while (!r) {
    let n = await new Promise(o => setTimeout(() => o(s.shift()), 0));
    if (n) yield n;
    r = t && s.length === 0;
  }
}
class cNt {
  universalMarshaller;
  constructor({
    utf8Encoder: utf8Encoder_2,
    utf8Decoder: utf8Decoder_2
  }) {
    this.universalMarshaller = new w({
      utf8Decoder: utf8Decoder_2,
      utf8Encoder: utf8Encoder_2
    });
  }
  deserialize(e, t) {
    let r = typeof e[Symbol.asyncIterator] === "function" ? e : N(e);
    return this.universalMarshaller.deserialize(r, t);
  }
  serialize(e, t) {
    return R.from(this.universalMarshaller.serialize(e, t));
  }
}
export { edn, cNt, zz, aVn, cdt, ddt, udt, lVn, cVn, dVn, uVn, pVn, fVn, mVn, pdt };
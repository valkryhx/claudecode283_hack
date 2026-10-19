// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { YKn, XKn, qUs } from "B:/~BUN/root/chunk-h938nwmq.js";
import { cHt, ban, BOo, jOo } from "B:/~BUN/root/chunk-ypm4v5fq.js";
import { H3, WT } from "B:/~BUN/root/chunk-7q18tptd.js";
import { HS } from "B:/~BUN/root/chunk-r9g5axec.js";
import { Gme } from "B:/~BUN/root/chunk-6etjgqgz.js";
import { JKn, QKn } from "B:/~BUN/root/chunk-wtj2nxpk.js";
import { PO } from "B:/~BUN/root/chunk-zjz6e5je.js";
import { Gae, Vae, qae, dte, WC, cte, Kae, Zj, ute, QU, Yae, Xae, Jae, Qae, Zae, pte } from "B:/~BUN/root/chunk-caya68ws.js";
import { jG } from "B:/~BUN/root/chunk-0s42pmjt.js";
import { Vc } from "B:/~BUN/root/chunk-bsy8eq8a.js";
import { RO } from "B:/~BUN/root/chunk-w57yz5h3.js";
import { fHt } from "B:/~BUN/root/chunk-64gzckqq.js";
import { AO } from "B:/~BUN/root/chunk-ckxm3hbs.js";
import { bg, sL } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { rC, rP } from "B:/~BUN/root/chunk-80e5c2dj.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
function ae(e) {
  let {
      signer: t,
      signer: o
    } = e,
    r = Object.assign(e, {
      eventSigner: t,
      messageSigner: o
    }),
    eventStreamPayloadHandler = r.eventStreamPayloadHandlerProvider(r);
  return Object.assign(r, {
    eventStreamPayloadHandler: eventStreamPayloadHandler
  });
}
var L = ve(Gae()),
  st = ve(Vae()),
  at = ve(qae()),
  O = ve(cte());
var At = function () {
  function e() {
    this.crc32 = new g();
  }
  return e.prototype.update = function update(t) {
    if (ban(t)) return;
    this.crc32.update(cHt(t));
  }, e.prototype.digest = function digest() {
    return YKn(this, void 0, void 0, function () {
      return XKn(this, function (t) {
        return [2, BOo(this.crc32.digest())];
      });
    });
  }, e.prototype.reset = function reset() {
    this.crc32 = new g();
  }, e;
}();
var g = function () {
  function e() {
    this.checksum = 4294967295;
  }
  return e.prototype.update = function update(t) {
    var o, r;
    try {
      for (var n = qUs(t), s = n.next(); !s.done; s = n.next()) {
        var a = s.value;
        this.checksum = this.checksum >>> 8 ^ Bt[(this.checksum ^ a) & 255];
      }
    } catch (error) {
      o = {
        error: error
      };
    } finally {
      try {
        if (s && !s.done && (r = n.return)) r.call(n);
      } finally {
        if (o) throw o.error;
      }
    }
    return this;
  }, e.prototype.digest = function digest() {
    return (this.checksum ^ 4294967295) >>> 0;
  }, e;
}();
var yt = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
  Bt = jOo(yt);
var m = ve(fHt());
var ce = ve(fHt());
class h {
  bytes;
  constructor(e) {
    if (this.bytes = e, e.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
  }
  static fromNumber(e) {
    if (e > 9223372036854776000 || e < -9223372036854776000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
    let uint8Array = new Uint8Array(8);
    for (let o = 7, r = Math.abs(Math.round(e)); o > -1 && r > 0; o--, r /= 256) uint8Array[o] = r;
    if (e < 0) ie(uint8Array);
    return new h(uint8Array);
  }
  valueOf() {
    let e = this.bytes.slice(0),
      t = e[0] & 128;
    if (t) ie(e);
    return parseInt(ce.toHex(e), 16) * (t ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
}
function ie(e) {
  for (let t = 0; t < 8; t++) e[t] ^= 255;
  for (let t = 7; t > -1; t--) if (e[t]++, e[t] !== 0) break;
}
class z {
  toUtf8;
  fromUtf8;
  constructor(e, t) {
    this.toUtf8 = e, this.fromUtf8 = t;
  }
  format(e) {
    let t = [];
    for (let n of Object.keys(e)) {
      let s = this.fromUtf8(n);
      t.push(Uint8Array.from([s.byteLength]), s, this.formatHeaderValue(e[n]));
    }
    let uint8Array_2 = new Uint8Array(t.reduce((acc, item) => acc + item.byteLength, 0)),
      r = 0;
    for (let n of t) uint8Array_2.set(n, r), r += n.byteLength;
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
        let a = this.fromUtf8(e.value),
          dataView_4 = new DataView(new ArrayBuffer(3 + a.byteLength));
        dataView_4.setUint8(0, 7), dataView_4.setUint16(1, a.byteLength, !1);
        let uint8Array_5 = new Uint8Array(dataView_4.buffer);
        return uint8Array_5.set(a, 3), uint8Array_5;
      case "timestamp":
        let uint8Array_6 = new Uint8Array(9);
        return uint8Array_6[0] = 8, uint8Array_6.set(h.fromNumber(e.value.valueOf()).bytes, 1), uint8Array_6;
      case "uuid":
        if (!bt.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
        let uint8Array_7 = new Uint8Array(17);
        return uint8Array_7[0] = 9, uint8Array_7.set(m.fromHex(e.value.replace(/\-/g, "")), 1), uint8Array_7;
    }
  }
  parse(e) {
    let t = {},
      o = 0;
    while (o < e.byteLength) {
      let r = e.getUint8(o++),
        n = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, r));
      switch (o += r, e.getUint8(o++)) {
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
            value: e.getInt8(o++)
          };
          break;
        case 3:
          t[n] = {
            type: type_3,
            value: e.getInt16(o, !1)
          }, o += 2;
          break;
        case 4:
          t[n] = {
            type: type_4,
            value: e.getInt32(o, !1)
          }, o += 4;
          break;
        case 5:
          t[n] = {
            type: type_5,
            value: new h(new Uint8Array(e.buffer, e.byteOffset + o, 8))
          }, o += 8;
          break;
        case 6:
          let s = e.getUint16(o, !1);
          o += 2, t[n] = {
            type: type_6,
            value: new Uint8Array(e.buffer, e.byteOffset + o, s)
          }, o += s;
          break;
        case 7:
          let a = e.getUint16(o, !1);
          o += 2, t[n] = {
            type: type_7,
            value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, a))
          }, o += a;
          break;
        case 8:
          t[n] = {
            type: type_8,
            value: new Date(new h(new Uint8Array(e.buffer, e.byteOffset + o, 8)).valueOf())
          }, o += 8;
          break;
        case 9:
          let uint8Array_8 = new Uint8Array(e.buffer, e.byteOffset + o, 16);
          o += 16, t[n] = {
            type: type_9,
            value: `${m.toHex(uint8Array_8.subarray(0, 4))}-${m.toHex(uint8Array_8.subarray(4, 6))}-${m.toHex(uint8Array_8.subarray(6, 8))}-${m.toHex(uint8Array_8.subarray(8, 10))}-${m.toHex(uint8Array_8.subarray(10))}`
          };
          break;
        default:
          throw Error("Unrecognized header type tag");
      }
    }
    return t;
  }
}
var _e;
(function (e) {
  e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid";
})(_e || (_e = {}));
var type = "boolean",
  type_2 = "byte",
  type_3 = "short",
  type_4 = "integer",
  type_5 = "long",
  type_6 = "binary",
  type_7 = "string",
  type_8 = "timestamp",
  type_9 = "uuid",
  bt = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var ue = 4,
  x = ue * 2,
  f = 4,
  Mt = x + f * 2;
function de({
  byteLength: byteLength,
  byteOffset: byteOffset,
  buffer: buffer
}) {
  if (byteLength < Mt) throw Error("Provided message too short to accommodate event stream message overhead");
  let dataView_5 = new DataView(buffer, byteOffset, byteLength),
    n = dataView_5.getUint32(0, !1);
  if (byteLength !== n) throw Error("Reported message length does not match received message length");
  let s = dataView_5.getUint32(ue, !1),
    a = dataView_5.getUint32(x, !1),
    i = dataView_5.getUint32(byteLength - f, !1),
    c = new g().update(new Uint8Array(buffer, byteOffset, x));
  if (a !== c.digest()) throw Error(`The prelude checksum specified in the message (${a}) does not match the calculated CRC32 checksum (${c.digest()})`);
  if (c.update(new Uint8Array(buffer, byteOffset + x, byteLength - (x + f))), i !== c.digest()) throw Error(`The message checksum (${c.digest()}) did not match the expected value of ${i}`);
  return {
    headers: new DataView(buffer, byteOffset + x + f, s),
    body: new Uint8Array(buffer, byteOffset + x + f + s, n - s - (x + f + f))
  };
}
class E {
  headerMarshaller;
  messageBuffer;
  isEndOfStream;
  constructor(e, t) {
    this.headerMarshaller = new z(e, t), this.messageBuffer = [], this.isEndOfStream = !1;
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
    let o = this.headerMarshaller.format(headers),
      r = o.byteLength + body.byteLength + 16,
      uint8Array_9 = new Uint8Array(r),
      dataView_6 = new DataView(uint8Array_9.buffer, uint8Array_9.byteOffset, uint8Array_9.byteLength),
      a = new g();
    return dataView_6.setUint32(0, r, !1), dataView_6.setUint32(4, o.byteLength, !1), dataView_6.setUint32(8, a.update(uint8Array_9.subarray(0, 8)).digest(), !1), uint8Array_9.set(o, 12), uint8Array_9.set(body, o.byteLength + 12), dataView_6.setUint32(r - 4, a.update(uint8Array_9.subarray(8, r - 4)).digest(), !1), uint8Array_9;
  }
  decode(e) {
    let {
      headers: headers_2,
      body: body_2
    } = de(e);
    return {
      headers: this.headerMarshaller.parse(headers_2),
      body: body_2
    };
  }
  formatHeaders(e) {
    return this.headerMarshaller.format(e);
  }
}
class Q {
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
class K {
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
class J {
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
class Z {
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
var me = ve(bg());
var pe = e => e.protocol === "ws:" || e.protocol === "wss:";
class Y {
  signer;
  constructor(e) {
    this.signer = e.signer;
  }
  presign(e, t = {}) {
    return this.signer.presign(e, t);
  }
  async sign(e, t) {
    if (me.HttpRequest.isInstance(e) && pe(e)) return {
      ...(await this.signer.presign({
        ...e,
        body: ""
      }, {
        ...t,
        expiresIn: 60,
        unsignableHeaders: new Set(Object.keys(e.headers).filter(item => item !== "host"))
      })),
      body: e.body
    };else return this.signer.sign(e, t);
  }
}
var xe = e => {
    let {
      signer: signer
    } = e;
    return Object.assign(e, {
      signer: async o => {
        let signer_2 = await signer(o);
        if (wt(signer_2)) return new Y({
          signer: signer_2
        });
        throw Error("Expected WebsocketSignatureV4 signer, please check the client constructor.");
      }
    });
  },
  wt = e => !!e;
function Ce(e) {
  let t = 0,
    o = 0,
    r = null,
    n = null,
    s = i => {
      if (typeof i !== "number") throw Error("Attempted to allocate an event message where size was not a number: " + i);
      t = i, o = 4, r = new Uint8Array(i), new DataView(r.buffer).setUint32(0, i, !1);
    },
    a = async function* () {
      let i = e[Symbol.asyncIterator]();
      while (!0) {
        let {
          value: value,
          done: done
        } = await i.next();
        if (done) {
          if (!t) return;else if (t === o) yield r;else throw Error("Truncated event message received.");
          return;
        }
        let u = value.length,
          _ = 0;
        while (_ < u) {
          if (!r) {
            let T = u - _;
            if (!n) n = new Uint8Array(4);
            let X = Math.min(4 - o, T);
            if (n.set(value.slice(_, _ + X), o), o += X, _ += X, o < 4) break;
            s(new DataView(n.buffer).getUint32(0, !1)), n = null;
          }
          let R = Math.min(t - o, u - _);
          if (r.set(value.slice(_, _ + R), o), o += R, _ += R, t && t === o) yield r, r = null, t = 0, o = 0;
        }
      }
    };
  return {
    [Symbol.asyncIterator]: a
  };
}
function ge(e, t) {
  return async function (o) {
    let {
      value: value_2
    } = o.headers[":message-type"];
    if (value_2 === "error") {
      let n = Error(o.headers[":error-message"].value || "UnknownError");
      throw n.name = o.headers[":error-code"].value, n;
    } else if (value_2 === "exception") {
      let n = o.headers[":exception-type"].value,
        s = {
          [n]: o
        },
        a = await e(s);
      if (a.$unknown) {
        let i = Error(t(o.body));
        throw i.name = n, i;
      }
      throw a[n];
    } else if (value_2 === "event") {
      let n = {
          [o.headers[":event-type"].value]: o
        },
        s = await e(n);
      if (s.$unknown) return;
      return s;
    } else throw Error(`Unrecognizable event type: ${o.headers[":event-type"].value}`);
  };
}
class ee {
  eventStreamCodec;
  utfEncoder;
  constructor({
    utf8Encoder: utf8Encoder,
    utf8Decoder: utf8Decoder
  }) {
    this.eventStreamCodec = new E(utf8Encoder, utf8Decoder), this.utfEncoder = utf8Encoder;
  }
  deserialize(e, t) {
    let inputStream = Ce(e);
    return new J({
      messageStream: new Q({
        inputStream: inputStream,
        decoder: this.eventStreamCodec
      }),
      deserializer: ge(t, this.utfEncoder)
    });
  }
  serialize(inputStream_2, serializer) {
    return new K({
      messageStream: new Z({
        inputStream: inputStream_2,
        serializer: serializer
      }),
      encoder: this.eventStreamCodec,
      includeEndFrame: !0
    });
  }
}
var it = ve(WT()),
  B = ve(HS()),
  ct = ve(RO());
var fe = e => Object.assign(e, {
  eventStreamMarshaller: e.eventStreamSerdeProvider(e)
});
var _t = ve(Kae()),
  lt = ve(Zj()),
  U = ve(QU()),
  ut = ve(Vc());
var he = ve(WC()),
  S = ve(HS()),
  I = ve(AO()),
  httpAuthSchemeParametersProvider = async (e, t, o) => ({
    operation: I.getSmithyContext(t).operation,
    region: (await I.normalizeProvider(e.region)()) || (() => {
      throw Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  });
function Ft(e) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "bedrock",
      region: e.region
    },
    propertiesExtractor: (config, context) => ({
      signingProperties: {
        config: config,
        context: context
      }
    })
  };
}
function Lt(e) {
  return {
    schemeId: "smithy.api#httpBearerAuth",
    propertiesExtractor: ({
      profile: profile,
      filepath: filepath,
      configFilepath: configFilepath,
      ignoreCache: ignoreCache
    }, s) => ({
      identityProperties: {
        profile: profile,
        filepath: filepath,
        configFilepath: configFilepath,
        ignoreCache: ignoreCache
      }
    })
  };
}
var Ae = e => {
    let t = [];
    switch (e.operation) {
      default:
        t.push(Ft(e)), t.push(Lt(e));
    }
    return t;
  },
  ye = e => {
    let token = S.memoizeIdentityProvider(e.token, S.isIdentityExpired, S.doesIdentityRequireRefresh),
      o = he.resolveAwsSdkSigV4Config(e);
    return Object.assign(o, {
      authSchemePreference: I.normalizeProvider(e.authSchemePreference ?? []),
      token: token
    });
  };
var Be = e => Object.assign(e, {
    useDualstackEndpoint: e.useDualstackEndpoint ?? !1,
    useFipsEndpoint: e.useFipsEndpoint ?? !1,
    defaultSigningName: "bedrock"
  }),
  Re = {
    UseFIPS: {
      type: "builtInParams",
      name: "useFipsEndpoint"
    },
    Endpoint: {
      type: "builtInParams",
      name: "endpoint"
    },
    Region: {
      type: "builtInParams",
      name: "region"
    },
    UseDualStack: {
      type: "builtInParams",
      name: "useDualstackEndpoint"
    }
  };
var Ee = {
  name: "@aws-sdk/client-bedrock-runtime",
  description: "AWS SDK for JavaScript Bedrock Runtime Client for Node.js, Browser and React Native",
  version: "3.936.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-bedrock-runtime",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock-runtime"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: !1,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.936.0",
    "@aws-sdk/credential-provider-node": "3.936.0",
    "@aws-sdk/eventstream-handler-node": "3.936.0",
    "@aws-sdk/middleware-eventstream": "3.936.0",
    "@aws-sdk/middleware-host-header": "3.936.0",
    "@aws-sdk/middleware-logger": "3.936.0",
    "@aws-sdk/middleware-recursion-detection": "3.936.0",
    "@aws-sdk/middleware-user-agent": "3.936.0",
    "@aws-sdk/middleware-websocket": "3.936.0",
    "@aws-sdk/region-config-resolver": "3.936.0",
    "@aws-sdk/token-providers": "3.936.0",
    "@aws-sdk/types": "3.936.0",
    "@aws-sdk/util-endpoints": "3.936.0",
    "@aws-sdk/util-user-agent-browser": "3.936.0",
    "@aws-sdk/util-user-agent-node": "3.936.0",
    "@smithy/config-resolver": "^4.4.3",
    "@smithy/core": "^3.18.5",
    "@smithy/eventstream-serde-browser": "^4.2.5",
    "@smithy/eventstream-serde-config-resolver": "^4.3.5",
    "@smithy/eventstream-serde-node": "^4.2.5",
    "@smithy/fetch-http-handler": "^5.3.6",
    "@smithy/hash-node": "^4.2.5",
    "@smithy/invalid-dependency": "^4.2.5",
    "@smithy/middleware-content-length": "^4.2.5",
    "@smithy/middleware-endpoint": "^4.3.12",
    "@smithy/middleware-retry": "^4.4.12",
    "@smithy/middleware-serde": "^4.2.6",
    "@smithy/middleware-stack": "^4.2.5",
    "@smithy/node-config-provider": "^4.3.5",
    "@smithy/node-http-handler": "^4.4.5",
    "@smithy/protocol-http": "^5.3.5",
    "@smithy/smithy-client": "^4.9.8",
    "@smithy/types": "^4.9.0",
    "@smithy/url-parser": "^4.2.5",
    "@smithy/util-base64": "^4.3.0",
    "@smithy/util-body-length-browser": "^4.2.0",
    "@smithy/util-body-length-node": "^4.2.1",
    "@smithy/util-defaults-mode-browser": "^4.3.11",
    "@smithy/util-defaults-mode-node": "^4.2.14",
    "@smithy/util-endpoints": "^3.2.5",
    "@smithy/util-middleware": "^4.2.5",
    "@smithy/util-retry": "^4.2.5",
    "@smithy/util-stream": "^4.5.6",
    "@smithy/util-utf8": "^4.2.0",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": ["dist-types/ts3.4/*"]
    }
  },
  files: ["dist-*/**"],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-runtime",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-bedrock-runtime"
  }
};
var y = ve(WC());
import { PassThrough as Nt, pipeline as Ht, Readable as Vt } from "stream";
import { Transform as Ut } from "stream";
class te extends Ut {
  priorSignature;
  messageSigner;
  eventStreamCodec;
  systemClockOffsetProvider;
  constructor(e) {
    super({
      autoDestroy: !0,
      readableObjectMode: !0,
      writableObjectMode: !0,
      ...e
    });
    this.priorSignature = e.priorSignature, this.eventStreamCodec = e.eventStreamCodec, this.messageSigner = e.messageSigner, this.systemClockOffsetProvider = e.systemClockOffsetProvider;
  }
  async _transform(body_3, t, o) {
    try {
      let r = new Date(Date.now() + (await this.systemClockOffsetProvider())),
        headers_3 = {
          ":date": {
            type: "timestamp",
            value: r
          }
        },
        s = await this.messageSigner.sign({
          message: {
            body: body_3,
            headers: headers_3
          },
          priorSignature: this.priorSignature
        }, {
          signingDate: r
        });
      this.priorSignature = s.signature;
      let a = this.eventStreamCodec.encode({
        headers: {
          ...headers_3,
          ":chunk-signature": {
            type: "binary",
            value: Wt(s.signature)
          }
        },
        body: body_3
      });
      return this.push(a), o();
    } catch (error) {
      o(error);
    }
  }
}
function Wt(e) {
  let t = Buffer.from(e, "hex");
  return new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
class oe {
  messageSigner;
  eventStreamCodec;
  systemClockOffsetProvider;
  constructor(e) {
    this.messageSigner = e.messageSigner, this.eventStreamCodec = new E(e.utf8Encoder, e.utf8Decoder), this.systemClockOffsetProvider = async () => e.systemClockOffset ?? 0;
  }
  async handle(e, t, o = {}) {
    let request = t.request,
      {
        body: body_4,
        query: query
      } = request;
    if (!(body_4 instanceof Vt)) throw Error("Eventstream payload must be a Readable stream.");
    let a = body_4;
    request.body = new Nt({
      objectMode: !0
    });
    let priorSignature = request.headers?.authorization?.match(/Signature=([\w]+)$/)?.[1] ?? query?.["X-Amz-Signature"] ?? "",
      p = new te({
        priorSignature: priorSignature,
        eventStreamCodec: this.eventStreamCodec,
        messageSigner: await this.messageSigner(),
        systemClockOffsetProvider: this.systemClockOffsetProvider
      });
    Ht(a, p, request.body, _ => {
      if (_) throw _;
    });
    let u;
    try {
      u = await e(t);
    } catch (error) {
      throw request.body.end(), error;
    }
    return u;
  }
}
var ne = e => new oe(e);
var D = ve(Yae()),
  v = ve(WT()),
  ze = ve(HS());
import { Readable as qt } from "stream";
async function* Ie(e) {
  let t = !1,
    o = !1,
    r = [];
  e.on("error", n => {
    if (!t) t = !0;
    if (n) throw n;
  }), e.on("data", n => {
    r.push(n);
  }), e.on("end", () => {
    t = !0;
  });
  while (!o) {
    let n = await new Promise(s => setTimeout(() => s(r.shift()), 0));
    if (n) yield n;
    o = t && r.length === 0;
  }
}
class KKn {
  universalMarshaller;
  constructor({
    utf8Encoder: utf8Encoder_2,
    utf8Decoder: utf8Decoder_2
  }) {
    this.universalMarshaller = new ee({
      utf8Decoder: utf8Decoder_2,
      utf8Encoder: utf8Encoder_2
    });
  }
  deserialize(e, t) {
    let o = typeof e[Symbol.asyncIterator] === "function" ? e : Ie(e);
    return this.universalMarshaller.deserialize(o, t);
  }
  serialize(e, t) {
    return qt.from(this.universalMarshaller.serialize(e, t));
  }
}
var Te = e => new KKn(e);
var Qe = ve(Xae()),
  P = ve(QU()),
  C = ve(PO()),
  b = ve(sL()),
  Ke = ve(Jae()),
  Je = ve(ute());
var He = ve(WC()),
  Ve = ve(Qae()),
  qe = ve(HS()),
  je = ve(Vc()),
  $e = ve(jG()),
  G = ve(rP()),
  k = ve(rC());
var We = ve(dte()),
  A = ve(H3());
var Ge = {
    ["required"]: !1,
    type: "string"
  },
  ke = {
    ["required"]: !0,
    default: !1,
    type: "boolean"
  },
  url = {
    ["ref"]: "Endpoint"
  },
  Le = {
    ["fn"]: "booleanEquals",
    ["argv"]: [{
      ["ref"]: "UseFIPS"
    }, !0]
  },
  Oe = {
    ["fn"]: "booleanEquals",
    ["argv"]: [{
      ["ref"]: "UseDualStack"
    }, !0]
  },
  d = {},
  Pe = {
    ["fn"]: "getAttr",
    ["argv"]: [{
      ["ref"]: "PartitionResult"
    }, "supportsFIPS"]
  },
  be = {
    ["fn"]: "booleanEquals",
    ["argv"]: [!0, {
      ["fn"]: "getAttr",
      ["argv"]: [{
        ["ref"]: "PartitionResult"
      }, "supportsDualStack"]
    }]
  },
  conditions = [Le],
  conditions_2 = [Oe],
  Fe = [{
    ["ref"]: "Region"
  }],
  jt = {
    version: "1.0",
    parameters: {
      Region: Ge,
      UseDualStack: ke,
      UseFIPS: ke,
      Endpoint: Ge
    },
    rules: [{
      conditions: [{
        ["fn"]: "isSet",
        ["argv"]: [url]
      }],
      rules: [{
        conditions: conditions,
        error: "Invalid Configuration: FIPS and custom endpoint are not supported",
        type: "error"
      }, {
        rules: [{
          conditions: conditions_2,
          error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
          type: "error"
        }, {
          endpoint: {
            url: url,
            properties: d,
            headers: d
          },
          type: "endpoint"
        }],
        type: "tree"
      }],
      type: "tree"
    }, {
      rules: [{
        conditions: [{
          ["fn"]: "isSet",
          ["argv"]: Fe
        }],
        rules: [{
          conditions: [{
            ["fn"]: "aws.partition",
            ["argv"]: Fe,
            assign: "PartitionResult"
          }],
          rules: [{
            conditions: [Le, Oe],
            rules: [{
              conditions: [{
                ["fn"]: "booleanEquals",
                ["argv"]: [!0, Pe]
              }, be],
              rules: [{
                rules: [{
                  endpoint: {
                    url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                    properties: d,
                    headers: d
                  },
                  type: "endpoint"
                }],
                type: "tree"
              }],
              type: "tree"
            }, {
              error: "FIPS and DualStack are enabled, but this partition does not support one or both",
              type: "error"
            }],
            type: "tree"
          }, {
            conditions: conditions,
            rules: [{
              conditions: [{
                ["fn"]: "booleanEquals",
                ["argv"]: [Pe, !0]
              }],
              rules: [{
                rules: [{
                  endpoint: {
                    url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}",
                    properties: d,
                    headers: d
                  },
                  type: "endpoint"
                }],
                type: "tree"
              }],
              type: "tree"
            }, {
              error: "FIPS is enabled but this partition does not support FIPS",
              type: "error"
            }],
            type: "tree"
          }, {
            conditions: conditions_2,
            rules: [{
              conditions: [be],
              rules: [{
                rules: [{
                  endpoint: {
                    url: "https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}",
                    properties: d,
                    headers: d
                  },
                  type: "endpoint"
                }],
                type: "tree"
              }],
              type: "tree"
            }, {
              error: "DualStack is enabled but this partition does not support DualStack",
              type: "error"
            }],
            type: "tree"
          }, {
            rules: [{
              endpoint: {
                url: "https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}",
                properties: d,
                headers: d
              },
              type: "endpoint"
            }],
            type: "tree"
          }],
          type: "tree"
        }],
        type: "tree"
      }, {
        error: "Invalid Configuration: Missing Region",
        type: "error"
      }],
      type: "tree"
    }]
  },
  Ue = jt;
var $t = new A.EndpointCache({
    size: 50,
    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
  }),
  Ne = (endpointParams, t = {}) => $t.get(endpointParams, () => A.resolveEndpoint(Ue, {
    endpointParams: endpointParams,
    logger: t.logger
  }));
A.customEndpointFunctions.aws = We.awsEndpointFunctions;
var Xe = e => ({
  apiVersion: "2023-09-30",
  base64Decoder: e?.base64Decoder ?? G.fromBase64,
  base64Encoder: e?.base64Encoder ?? G.toBase64,
  disableHostPrefix: e?.disableHostPrefix ?? !1,
  endpointProvider: e?.endpointProvider ?? Ne,
  extensions: e?.extensions ?? [],
  httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Ae,
  httpAuthSchemes: e?.httpAuthSchemes ?? [{
    schemeId: "aws.auth#sigv4",
    identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"),
    signer: new He.AwsSdkSigV4Signer()
  }, {
    schemeId: "smithy.api#httpBearerAuth",
    identityProvider: t => t.getIdentityProvider("smithy.api#httpBearerAuth"),
    signer: new qe.HttpBearerAuthSigner()
  }],
  logger: e?.logger ?? new je.NoOpLogger(),
  protocol: e?.protocol ?? new Ve.AwsRestJsonProtocol({
    defaultNamespace: "com.amazonaws.bedrockruntime"
  }),
  serviceId: e?.serviceId ?? "Bedrock Runtime",
  urlParser: e?.urlParser ?? $e.parseUrl,
  utf8Decoder: e?.utf8Decoder ?? k.fromUtf8,
  utf8Encoder: e?.utf8Encoder ?? k.toUtf8
});
var Ze = ve(Vc()),
  Ye = ve(Zae()),
  et = ve(Vc()),
  tt = e => {
    et.emitWarningIfUnsupportedVersion(process.version);
    let defaultsMode = Ye.resolveDefaultsModeConfig(e),
      o = () => defaultsMode().then(Ze.loadConfigsForDefaultMode),
      r = Xe(e);
    y.emitWarningIfUnsupportedVersion(process.version);
    let n = {
      profile: e?.profile,
      logger: r.logger,
      signingName: "bedrock"
    };
    return {
      ...r,
      ...e,
      runtime: "node",
      defaultsMode: defaultsMode,
      authSchemePreference: e?.authSchemePreference ?? C.loadConfig(y.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, n),
      bodyLengthChecker: e?.bodyLengthChecker ?? Ke.calculateBodyLength,
      credentialDefaultProvider: e?.credentialDefaultProvider ?? Gme,
      defaultUserAgentProvider: e?.defaultUserAgentProvider ?? D.createDefaultUserAgentProvider({
        serviceId: r.serviceId,
        clientVersion: Ee.version
      }),
      eventStreamPayloadHandlerProvider: e?.eventStreamPayloadHandlerProvider ?? ne,
      eventStreamSerdeProvider: e?.eventStreamSerdeProvider ?? Te,
      httpAuthSchemes: e?.httpAuthSchemes ?? [{
        schemeId: "aws.auth#sigv4",
        identityProvider: s => s.getIdentityProvider("aws.auth#sigv4"),
        signer: new y.AwsSdkSigV4Signer()
      }, {
        schemeId: "smithy.api#httpBearerAuth",
        identityProvider: s => s.getIdentityProvider("smithy.api#httpBearerAuth") || (async a => {
          try {
            return await JKn({
              signingName: "bedrock"
            })();
          } catch (error) {
            return await QKn(a)(a);
          }
        }),
        signer: new ze.HttpBearerAuthSigner()
      }],
      maxAttempts: e?.maxAttempts ?? C.loadConfig(P.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, e),
      region: e?.region ?? C.loadConfig(v.NODE_REGION_CONFIG_OPTIONS, {
        ...v.NODE_REGION_CONFIG_FILE_OPTIONS,
        ...n
      }),
      requestHandler: b.NodeHttp2Handler.create(e?.requestHandler ?? (async () => ({
        ...(await o()),
        disableConcurrentStreams: !0
      }))),
      retryMode: e?.retryMode ?? C.loadConfig({
        ...P.NODE_RETRY_MODE_CONFIG_OPTIONS,
        default: async () => (await o()).retryMode || Je.DEFAULT_RETRY_MODE
      }, e),
      sha256: e?.sha256 ?? Qe.Hash.bind(null, "sha256"),
      streamCollector: e?.streamCollector ?? b.streamCollector,
      useDualstackEndpoint: e?.useDualstackEndpoint ?? C.loadConfig(v.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, n),
      useFipsEndpoint: e?.useFipsEndpoint ?? C.loadConfig(v.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, n),
      userAgentAppId: e?.userAgentAppId ?? C.loadConfig(D.NODE_APP_ID_CONFIG_OPTIONS, n)
    };
  };
var M = ve(pte()),
  w = ve(bg()),
  F = ve(Vc());
var ot = e => {
    let {
      httpAuthSchemes: httpAuthSchemes,
      httpAuthSchemeProvider: httpAuthSchemeProvider,
      credentials: credentials,
      token: token_2
    } = e;
    return {
      setHttpAuthScheme(s) {
        let a = httpAuthSchemes.findIndex(item => item.schemeId === s.schemeId);
        if (a === -1) httpAuthSchemes.push(s);else httpAuthSchemes.splice(a, 1, s);
      },
      httpAuthSchemes() {
        return httpAuthSchemes;
      },
      setHttpAuthSchemeProvider(s) {
        httpAuthSchemeProvider = s;
      },
      httpAuthSchemeProvider() {
        return httpAuthSchemeProvider;
      },
      setCredentials(s) {
        credentials = s;
      },
      credentials() {
        return credentials;
      },
      setToken(s) {
        token_2 = s;
      },
      token() {
        return token_2;
      }
    };
  },
  nt = e => ({
    httpAuthSchemes: e.httpAuthSchemes(),
    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
    credentials: e.credentials(),
    token: e.token()
  });
var rt = (e, t) => {
  let o = Object.assign(M.getAwsRegionExtensionConfiguration(e), F.getDefaultExtensionConfiguration(e), w.getHttpHandlerExtensionConfiguration(e), ot(e));
  return t.forEach(item => item.configure(o)), Object.assign(e, M.resolveAwsRegionExtensionConfiguration(o), F.resolveDefaultRuntimeConfig(o), w.resolveHttpHandlerRuntimeConfig(o), nt(o));
};
class GJs extends ut.Client {
  config;
  constructor(...[e]) {
    let t = tt(e || {});
    super(t);
    this.initConfig = t;
    let o = Be(t),
      r = O.resolveUserAgentConfig(o),
      n = U.resolveRetryConfig(r),
      s = it.resolveRegionConfig(n),
      a = L.resolveHostHeaderConfig(s),
      i = lt.resolveEndpointConfig(a),
      c = fe(i),
      p = ye(c),
      u = ae(p),
      _ = xe(u),
      R = rt(_, e?.extensions || []);
    this.config = R, this.middlewareStack.use(ct.getSchemaSerdePlugin(this.config)), this.middlewareStack.use(O.getUserAgentPlugin(this.config)), this.middlewareStack.use(U.getRetryPlugin(this.config)), this.middlewareStack.use(_t.getContentLengthPlugin(this.config)), this.middlewareStack.use(L.getHostHeaderPlugin(this.config)), this.middlewareStack.use(st.getLoggerPlugin(this.config)), this.middlewareStack.use(at.getRecursionDetectionPlugin(this.config)), this.middlewareStack.use(B.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: httpAuthSchemeParametersProvider,
      identityProviderConfigProvider: async T => new B.DefaultIdentityProviderConfig({
        "aws.auth#sigv4": T.credentials,
        "smithy.api#httpBearerAuth": T.token
      })
    })), this.middlewareStack.use(B.getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
}
var l = ve(RO());
var dt = ve(Vc());
class JU extends dt.ServiceException {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, JU.prototype);
  }
}
class W extends JU {
  name = "AccessDeniedException";
  $fault = "client";
  constructor(e) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, W.prototype);
  }
}
class oHt extends JU {
  name = "InternalServerException";
  $fault = "server";
  constructor(e) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...e
    });
    Object.setPrototypeOf(this, oHt.prototype);
  }
}
class sHt extends JU {
  name = "ThrottlingException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, sHt.prototype);
  }
}
class iHt extends JU {
  name = "ValidationException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, iHt.prototype);
  }
}
class N extends JU {
  name = "ConflictException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, N.prototype);
  }
}
class H extends JU {
  name = "ResourceNotFoundException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, H.prototype);
  }
}
class V extends JU {
  name = "ServiceQuotaExceededException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, V.prototype);
  }
}
class aHt extends JU {
  name = "ServiceUnavailableException";
  $fault = "server";
  constructor(e) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...e
    });
    Object.setPrototypeOf(this, aHt.prototype);
  }
}
class q extends JU {
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
    Object.setPrototypeOf(this, q.prototype), this.originalStatusCode = e.originalStatusCode, this.resourceName = e.resourceName;
  }
}
class j extends JU {
  name = "ModelNotReadyException";
  $fault = "client";
  $retryable = {};
  constructor(e) {
    super({
      name: "ModelNotReadyException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, j.prototype);
  }
}
class lHt extends JU {
  name = "ModelTimeoutException";
  $fault = "client";
  constructor(e) {
    super({
      name: "ModelTimeoutException",
      $fault: "client",
      ...e
    });
    Object.setPrototypeOf(this, lHt.prototype);
  }
}
class dHt extends JU {
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
    Object.setPrototypeOf(this, dHt.prototype), this.originalStatusCode = e.originalStatusCode, this.originalMessage = e.originalMessage;
  }
}
var Xt = [0, "com.amazonaws.bedrockruntime", "Body", 8, 21];
var zt = [-3, "com.amazonaws.bedrockruntime", "AccessDeniedException", {
  ["error"]: "client",
  ["httpError"]: 403
}, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(zt, W);
var Qt = [3, "com.amazonaws.bedrockruntime", "AnyToolChoice", 0, [], []];
var Kt = [3, "com.amazonaws.bedrockruntime", "AutoToolChoice", 0, [], []];
var re = [3, "com.amazonaws.bedrockruntime", "CachePointBlock", 0, ["type"], [0]],
  Jt = [3, "com.amazonaws.bedrockruntime", "Citation", 0, ["title", "source", "sourceContent", "location"], [0, 0, () => Mo, () => Vo]],
  pt = [3, "com.amazonaws.bedrockruntime", "CitationsConfig", 0, ["enabled"], [2]],
  Zt = [3, "com.amazonaws.bedrockruntime", "CitationsContentBlock", 0, ["content", "citations"], [() => Po, () => bo]];
var Yt = [-3, "com.amazonaws.bedrockruntime", "ConflictException", {
  ["error"]: "client",
  ["httpError"]: 400
}, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Yt, N);
var eo = [3, "com.amazonaws.bedrockruntime", "ConverseTokensRequest", 0, ["messages", "system", "toolConfig", "additionalModelRequestFields"], [[() => Lo, 0], [() => Uo, 0], () => Ro, 15]];
var to = [3, "com.amazonaws.bedrockruntime", "CountTokensRequest", 0, ["modelId", "input"], [[0, 1], [() => $o, 0]]],
  oo = [3, "com.amazonaws.bedrockruntime", "CountTokensResponse", 0, ["inputTokens"], [1]],
  mt = [3, "com.amazonaws.bedrockruntime", "DocumentBlock", 0, ["format", "name", "source", "context", "citations"], [0, 0, () => zo, 0, () => pt]],
  no = [3, "com.amazonaws.bedrockruntime", "DocumentCharLocation", 0, ["documentIndex", "start", "end"], [1, 1, 1]],
  ro = [3, "com.amazonaws.bedrockruntime", "DocumentChunkLocation", 0, ["documentIndex", "start", "end"], [1, 1, 1]],
  so = [3, "com.amazonaws.bedrockruntime", "DocumentPageLocation", 0, ["documentIndex", "start", "end"], [1, 1, 1]];
var ao = [3, "com.amazonaws.bedrockruntime", "GuardrailConverseImageBlock", 8, ["format", "source"], [0, [() => Qo, 0]]],
  io = [3, "com.amazonaws.bedrockruntime", "GuardrailConverseTextBlock", 0, ["text", "qualifiers"], [0, 64]];
var xt = [3, "com.amazonaws.bedrockruntime", "ImageBlock", 0, ["format", "source"], [0, () => Ko]];
var co = [-3, "com.amazonaws.bedrockruntime", "InternalServerException", {
  ["error"]: "server",
  ["httpError"]: 500
}, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(co, oHt);
var _o = [3, "com.amazonaws.bedrockruntime", "InvokeModelTokensRequest", 0, ["body"], [[() => Xt, 0]]];
var lo = [3, "com.amazonaws.bedrockruntime", "Message", 0, ["role", "content"], [0, [() => wo, 0]]];
var uo = [-3, "com.amazonaws.bedrockruntime", "ModelErrorException", {
  ["error"]: "client",
  ["httpError"]: 424
}, ["message", "originalStatusCode", "resourceName"], [0, 1, 0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(uo, q);
var po = [-3, "com.amazonaws.bedrockruntime", "ModelNotReadyException", {
  ["error"]: "client",
  ["httpError"]: 429
}, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(po, j);
var mo = [-3, "com.amazonaws.bedrockruntime", "ModelStreamErrorException", {
  ["error"]: "client",
  ["httpError"]: 424
}, ["message", "originalStatusCode", "originalMessage"], [0, 1, 0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(mo, dHt);
var xo = [-3, "com.amazonaws.bedrockruntime", "ModelTimeoutException", {
  ["error"]: "client",
  ["httpError"]: 408
}, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(xo, lHt);
var Co = [3, "com.amazonaws.bedrockruntime", "ReasoningTextBlock", 8, ["text", "signature"], [0, 0]],
  vo = [-3, "com.amazonaws.bedrockruntime", "ResourceNotFoundException", {
    ["error"]: "client",
    ["httpError"]: 404
  }, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(vo, H);
var se = [3, "com.amazonaws.bedrockruntime", "S3Location", 0, ["uri", "bucketOwner"], [0, 0]],
  Ct = [3, "com.amazonaws.bedrockruntime", "SearchResultBlock", 0, ["source", "title", "content", "citations"], [0, 0, () => Oo, () => pt]],
  go = [3, "com.amazonaws.bedrockruntime", "SearchResultContentBlock", 0, ["text"], [0]],
  fo = [3, "com.amazonaws.bedrockruntime", "SearchResultLocation", 0, ["searchResultIndex", "start", "end"], [1, 1, 1]],
  ho = [-3, "com.amazonaws.bedrockruntime", "ServiceQuotaExceededException", {
    ["error"]: "client",
    ["httpError"]: 400
  }, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(ho, V);
var So = [-3, "com.amazonaws.bedrockruntime", "ServiceUnavailableException", {
  ["error"]: "server",
  ["httpError"]: 503
}, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(So, aHt);
var Ao = [3, "com.amazonaws.bedrockruntime", "SpecificToolChoice", 0, ["name"], [0]];
var yo = [3, "com.amazonaws.bedrockruntime", "SystemTool", 0, ["name"], [0]];
var Bo = [-3, "com.amazonaws.bedrockruntime", "ThrottlingException", {
  ["error"]: "client",
  ["httpError"]: 429
}, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Bo, sHt);
var Ro = [3, "com.amazonaws.bedrockruntime", "ToolConfiguration", 0, ["tools", "toolChoice"], [() => No, () => en]],
  Eo = [3, "com.amazonaws.bedrockruntime", "ToolResultBlock", 0, ["toolUseId", "content", "status", "type"], [0, () => Wo, 0, 0]];
var Io = [3, "com.amazonaws.bedrockruntime", "ToolSpecification", 0, ["name", "description", "inputSchema"], [0, 0, () => tn]],
  To = [3, "com.amazonaws.bedrockruntime", "ToolUseBlock", 0, ["toolUseId", "name", "input", "type"], [0, 0, 15, 0]];
var Go = [-3, "com.amazonaws.bedrockruntime", "ValidationException", {
  ["error"]: "client",
  ["httpError"]: 400
}, ["message"], [0]];
l.TypeRegistry.for("com.amazonaws.bedrockruntime").registerError(Go, iHt);
var vt = [3, "com.amazonaws.bedrockruntime", "VideoBlock", 0, ["format", "source"], [0, () => nn]],
  ko = [3, "com.amazonaws.bedrockruntime", "WebLocation", 0, ["url", "domain"], [0, 0]];
var Do = [-3, "smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime", "BedrockRuntimeServiceException", 0, [], []];
l.TypeRegistry.for("smithy.ts.sdk.synthetic.com.amazonaws.bedrockruntime").registerError(Do, JU);
var Po = [1, "com.amazonaws.bedrockruntime", "CitationGeneratedContentList", 0, () => Ho],
  bo = [1, "com.amazonaws.bedrockruntime", "Citations", 0, () => Jt],
  Mo = [1, "com.amazonaws.bedrockruntime", "CitationSourceContentList", 0, () => qo];
var wo = [1, "com.amazonaws.bedrockruntime", "ContentBlocks", 0, [() => jo, 0]],
  Fo = [1, "com.amazonaws.bedrockruntime", "DocumentContentBlocks", 0, () => Xo];
var Lo = [1, "com.amazonaws.bedrockruntime", "Messages", 0, [() => lo, 0]];
var Oo = [1, "com.amazonaws.bedrockruntime", "SearchResultContentBlocks", 0, () => go],
  Uo = [1, "com.amazonaws.bedrockruntime", "SystemContentBlocks", 0, [() => Zo, 0]];
var Wo = [1, "com.amazonaws.bedrockruntime", "ToolResultContentBlocks", 0, () => on],
  No = [1, "com.amazonaws.bedrockruntime", "Tools", 0, () => Yo];
var Ho = [3, "com.amazonaws.bedrockruntime", "CitationGeneratedContent", 0, ["text"], [0]],
  Vo = [3, "com.amazonaws.bedrockruntime", "CitationLocation", 0, ["web", "documentChar", "documentPage", "documentChunk", "searchResultLocation"], [() => ko, () => no, () => so, () => ro, () => fo]],
  qo = [3, "com.amazonaws.bedrockruntime", "CitationSourceContent", 0, ["text"], [0]],
  jo = [3, "com.amazonaws.bedrockruntime", "ContentBlock", 0, ["text", "image", "document", "video", "toolUse", "toolResult", "guardContent", "cachePoint", "reasoningContent", "citationsContent", "searchResult"], [0, () => xt, () => mt, () => vt, () => To, () => Eo, [() => gt, 0], () => re, [() => Jo, 0], () => Zt, () => Ct]];
var $o = [3, "com.amazonaws.bedrockruntime", "CountTokensInput", 0, ["invokeModel", "converse"], [[() => _o, 0], [() => eo, 0]]],
  Xo = [3, "com.amazonaws.bedrockruntime", "DocumentContentBlock", 0, ["text"], [0]],
  zo = [3, "com.amazonaws.bedrockruntime", "DocumentSource", 0, ["bytes", "s3Location", "text", "content"], [21, () => se, 0, () => Fo]];
var gt = [3, "com.amazonaws.bedrockruntime", "GuardrailConverseContentBlock", 0, ["text", "image"], [() => io, [() => ao, 0]]],
  Qo = [3, "com.amazonaws.bedrockruntime", "GuardrailConverseImageSource", 8, ["bytes"], [21]];
var Ko = [3, "com.amazonaws.bedrockruntime", "ImageSource", 0, ["bytes", "s3Location"], [21, () => se]];
var Jo = [3, "com.amazonaws.bedrockruntime", "ReasoningContentBlock", 8, ["reasoningText", "redactedContent"], [[() => Co, 0], 21]];
var Zo = [3, "com.amazonaws.bedrockruntime", "SystemContentBlock", 0, ["text", "guardContent", "cachePoint"], [0, [() => gt, 0], () => re]],
  Yo = [3, "com.amazonaws.bedrockruntime", "Tool", 0, ["toolSpec", "systemTool", "cachePoint"], [() => Io, () => yo, () => re]],
  en = [3, "com.amazonaws.bedrockruntime", "ToolChoice", 0, ["auto", "any", "tool"], [() => Kt, () => Qt, () => Ao]],
  tn = [3, "com.amazonaws.bedrockruntime", "ToolInputSchema", 0, ["json"], [15]];
var on = [3, "com.amazonaws.bedrockruntime", "ToolResultContentBlock", 0, ["json", "text", "image", "document", "video", "searchResult"], [15, 0, () => xt, () => mt, () => vt, () => Ct]],
  nn = [3, "com.amazonaws.bedrockruntime", "VideoSource", 0, ["bytes", "s3Location"], [21, () => se]];
var ft = [9, "com.amazonaws.bedrockruntime", "CountTokens", {
  ["http"]: ["POST", "/model/{modelId}/count-tokens", 200]
}, () => to, () => oo];
var ht = ve(Zj()),
  St = ve(Vc());
class VJs extends St.Command.classBuilder().ep(Re).m(function (e, t, o, r) {
  return [ht.getEndpointPlugin(o, e.getEndpointParameterInstructions())];
}).s("AmazonBedrockFrontendService", "CountTokens", {}).n("BedrockRuntimeClient", "CountTokensCommand").sc(ft).build() {}
export { KKn, GJs, JU, oHt, sHt, iHt, aHt, lHt, dHt, VJs };
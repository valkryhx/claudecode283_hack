// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { tdn, ndn } from "B:/~BUN/root/chunk-cs7ggjv6.js";
import { fdt, dNt } from "B:/~BUN/root/chunk-1tqc51sz.js";
var s = 64,
  y = 32,
  uint32Array = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
  g = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
  L = Math.pow(2, 53) - 1;
var c = function () {
  function h() {
    this.state = Int32Array.from(g), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1;
  }
  return h.prototype.update = function update(r) {
    if (this.finished) throw Error("Attempted to update an already finished hash.");
    var a = 0,
      byteLength = r.byteLength;
    if (this.bytesHashed += byteLength, this.bytesHashed * 8 > L) throw Error("Cannot hash more than 2^53 - 1 bits");
    while (byteLength > 0) if (this.buffer[this.bufferLength++] = r[a++], byteLength--, this.bufferLength === s) this.hashBuffer(), this.bufferLength = 0;
  }, h.prototype.digest = function digest() {
    if (!this.finished) {
      var r = this.bytesHashed * 8,
        dataView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
        bufferLength = this.bufferLength;
      if (dataView.setUint8(this.bufferLength++, 128), bufferLength % s >= s - 8) {
        for (var bufferLength_2 = this.bufferLength; bufferLength_2 < s; bufferLength_2++) dataView.setUint8(bufferLength_2, 0);
        this.hashBuffer(), this.bufferLength = 0;
      }
      for (var bufferLength_2 = this.bufferLength; bufferLength_2 < s - 8; bufferLength_2++) dataView.setUint8(bufferLength_2, 0);
      dataView.setUint32(s - 8, Math.floor(r / 4294967296), !0), dataView.setUint32(s - 4, r), this.hashBuffer(), this.finished = !0;
    }
    var uint8Array = new Uint8Array(y);
    for (var bufferLength_2 = 0; bufferLength_2 < 8; bufferLength_2++) uint8Array[bufferLength_2 * 4] = this.state[bufferLength_2] >>> 24 & 255, uint8Array[bufferLength_2 * 4 + 1] = this.state[bufferLength_2] >>> 16 & 255, uint8Array[bufferLength_2 * 4 + 2] = this.state[bufferLength_2] >>> 8 & 255, uint8Array[bufferLength_2 * 4 + 3] = this.state[bufferLength_2] >>> 0 & 255;
    return uint8Array;
  }, h.prototype.hashBuffer = function hashBuffer() {
    var r = this,
      {
        buffer: buffer,
        state: state
      } = r,
      e = state[0],
      i = state[1],
      o = state[2],
      u = state[3],
      x = state[4],
      b = state[5],
      d = state[6],
      p = state[7];
    for (var f = 0; f < s; f++) {
      if (f < 16) this.temp[f] = (buffer[f * 4] & 255) << 24 | (buffer[f * 4 + 1] & 255) << 16 | (buffer[f * 4 + 2] & 255) << 8 | buffer[f * 4 + 3] & 255;else {
        var n = this.temp[f - 2],
          w = (n >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10;
        n = this.temp[f - 15];
        var E = (n >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3;
        this.temp[f] = (w + this.temp[f - 7] | 0) + (E + this.temp[f - 16] | 0);
      }
      var v = (((x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)) + (x & b ^ ~x & d) | 0) + (p + (uint32Array[f] + this.temp[f] | 0) | 0) | 0,
        S = ((e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)) + (e & i ^ e & o ^ i & o) | 0;
      p = d, d = b, b = x, x = u + v | 0, u = o, o = i, i = e, e = v + S | 0;
    }
    state[0] += e, state[1] += i, state[2] += o, state[3] += u, state[4] += x, state[5] += b, state[6] += d, state[7] += p;
  }, h;
}();
var Lct = function () {
  function h(r) {
    this.secret = r, this.hash = new c(), this.reset();
  }
  return h.prototype.update = function update(r) {
    if (dNt(r) || this.error) return;
    try {
      this.hash.update(fdt(r));
    } catch (a) {
      this.error = a;
    }
  }, h.prototype.digestSync = function digestSync() {
    if (this.error) throw this.error;
    if (this.outer) {
      if (!this.outer.finished) this.outer.update(this.hash.digest());
      return this.outer.digest();
    }
    return this.hash.digest();
  }, h.prototype.digest = function digest() {
    return tdn(this, void 0, void 0, function () {
      return ndn(this, function (r) {
        return [2, this.digestSync()];
      });
    });
  }, h.prototype.reset = function reset() {
    if (this.hash = new c(), this.secret) {
      this.outer = new c();
      var r = _(this.secret),
        uint8Array_2 = new Uint8Array(s);
      uint8Array_2.set(r);
      for (var t = 0; t < s; t++) r[t] ^= 54, uint8Array_2[t] ^= 92;
      this.hash.update(r), this.outer.update(uint8Array_2);
      for (var t = 0; t < r.byteLength; t++) r[t] = 0;
    }
  }, h;
}();
function _(h) {
  var r = fdt(h);
  if (r.byteLength > s) {
    var a = new c();
    a.update(r), r = a.digest();
  }
  var uint8Array_3 = new Uint8Array(s);
  return uint8Array_3.set(r), uint8Array_3;
}
export { Lct };